'use client';

import type {
  Club,
  ClubMember,
  MemberCandidateUser,
} from '@enterprise/modules/sports-clubs/api/server.api';
import { useMembersApi } from '@enterprise/modules/sports-clubs/api/use-members-api';
import {
  Button,
  Empty,
  Form,
  FormField,
  FormSubmit,
  IconButton,
  Input,
  ModalBase,
  ModalConfirm,
  RadioButtonGroup,
  Select,
  type SelectOption,
  Table,
  Tag,
  toastError,
  toastSuccess,
  useAppForm,
  useStore,
  z,
} from '@enterprise/ui/components';
import { RenderIcon } from '@enterprise/ui/components/icons';
import { Pagination } from '@enterprise/ui/components/pagination';
import { usePageFooter } from '@enterprise/ui/layout/footer-context';
import { useTheme } from '@enterprise/ui/theme/theme-provider';
import { ClubMemberRole } from '@gql/graphql';
import type { ColumnDef } from '@tanstack/react-table';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

type MemberStatus = 'active' | 'inactive';
type OptionValue = 'existing' | 'new';
type OptionFieldApi = { form: { state: { values: { option: OptionValue } } } };

type Member = {
  id: string; // userId is used as row id
  name: string;
  email: string;
  status: MemberStatus;
  role: string;
  joinedAt: string;
};

function mapMembers(input: ClubMember[]): Member[] {
  return input.map((member) => ({
    id: member.userId,
    name: member.user.name,
    email: member.user.email,
    // Backend currently returns role but not member status yet.
    // Until ClubMember.status is exposed in GraphQL, treat all as active.
    status: 'active',
    role: member.role,
    joinedAt: new Date(member.joinedAt).toLocaleDateString('en-US'),
  }));
}

function roleLabel(role: ClubMemberRole): string {
  if (role === ClubMemberRole.Captain) return 'Captain';
  if (role === ClubMemberRole.Coach) return 'Coach';
  return 'Member';
}

export function MembersDirectoryView({
  club,
  members: rawMembers,
  candidateUsers,
}: {
  club: Pick<Club, 'id' | 'name'>;
  members: ClubMember[];
  candidateUsers: MemberCandidateUser[];
}) {
  const router = useRouter();
  const { resolvedTokens } = useTheme();
  const { createMember, createUser, deleteMember } = useMembersApi();
  const [tab, setTab] = useState<'all' | MemberStatus>('all');
  const [page, setPage] = useState(1);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<Member | null>(null);
  const [deletingMember, setDeletingMember] = useState<Member | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const limit = 10;

  const members = useMemo(() => mapMembers(rawMembers), [rawMembers]);
  const filteredMembers = useMemo(() => {
    if (tab === 'all') return members;
    return members.filter((member) => member.status === tab);
  }, [members, tab]);

  const pageCount = Math.ceil(filteredMembers.length / limit);
  const pageData = useMemo(
    () => filteredMembers.slice((page - 1) * limit, page * limit),
    [filteredMembers, page],
  );

  const columns: ColumnDef<Member>[] = useMemo(
    () => [
      {
        header: 'NO',
        id: 'no',
        size: 100,
        cell: ({ row }) => (page - 1) * limit + row.index + 1,
      },
      { header: 'Name', accessorKey: 'name', enableSorting: true },
      { header: 'Email', accessorKey: 'email' },
      {
        header: 'Role',
        accessorKey: 'role',
        cell: ({ getValue }) => roleLabel(getValue() as ClubMemberRole),
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: ({ getValue }) => {
          const value = getValue() as MemberStatus;
          return (
            <Tag
              content={value === 'active' ? 'Active' : 'Inactive'}
              color={value === 'active' ? resolvedTokens.color.success : resolvedTokens.color.error}
            />
          );
        },
      },
      { header: 'Join Date', accessorKey: 'joinedAt' },
      {
        header: 'Actions',
        id: 'actions',
        cell: ({ row }) => (
          <div className="flex gap-1">
            <Button
              size="small"
              variant="ghost"
              icon="pencil-square"
              onClick={() => setEditingMember(row.original)}
            />
            <Button
              size="small"
              variant="ghost"
              color="error"
              icon="trash"
              onClick={() => setDeletingMember(row.original)}
            />
          </div>
        ),
      },
    ],
    [page, resolvedTokens],
  );

  usePageFooter(
    pageCount > 1 ? (
      <Pagination
        pageCount={pageCount}
        page={page}
        total={filteredMembers.length}
        limit={limit}
        onChangePage={setPage}
      />
    ) : null,
  );

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-black">Members Directory</h2>
          <p className="mt-1 text-sm text-neutral-text-secondary">Manage members of {club.name}</p>
        </div>

        <div className="flex items-center gap-3">
          <RadioButtonGroup<'all' | MemberStatus>
            size="small"
            color="neutral"
            value={tab}
            onChange={(value) => {
              setTab(value);
              setPage(1);
            }}
            options={[
              { value: 'all', label: `All (${members.length})` },
              {
                value: 'active',
                label: `Active (${members.filter((member) => member.status === 'active').length})`,
              },
              {
                value: 'inactive',
                label: `Inactive (${members.filter((member) => member.status === 'inactive').length})`,
              },
            ]}
          />
          <Button size="small" icon="plus" onClick={() => setIsCreateOpen(true)}>
            Add Member
          </Button>
        </div>
      </div>

      {filteredMembers.length === 0 ? (
        <Empty title="No members found" description="There are no members in this segment yet." />
      ) : (
        <Table columns={columns} data={pageData} rowKey="id" />
      )}

      <MemberUpsertModal
        isOpen={isCreateOpen}
        mode="create"
        clubId={club.id}
        candidateUsers={candidateUsers}
        onClose={() => setIsCreateOpen(false)}
        onSubmit={async (payload) => {
          if (payload.option === 'existing') {
            await createMember({
              clubId: payload.clubId,
              userId: payload.userId,
              role: payload.role,
            });
          } else {
            const user = await createUser({
              name: payload.name,
              email: payload.email,
              password: payload.password,
            });
            await createMember({
              clubId: payload.clubId,
              userId: user.id,
              role: payload.role,
            });
          }
          toastSuccess('Member added successfully');
          setIsCreateOpen(false);
          router.refresh();
        }}
      />

      <MemberUpsertModal
        isOpen={Boolean(editingMember)}
        mode="edit"
        clubId={club.id}
        initialUserId={editingMember?.id}
        initialRole={editingMember?.role as ClubMemberRole | undefined}
        candidateUsers={candidateUsers}
        onClose={() => setEditingMember(null)}
        onSubmit={async (payload) => {
          if (!editingMember) return;
          if (payload.option === 'new') {
            toastError('Edit mode only supports existing member role update');
            return;
          }
          // No update mutation yet -> emulate edit via remove + add.
          await deleteMember(club.id, editingMember.id);
          await createMember({
            clubId: payload.clubId,
            userId: payload.userId,
            role: payload.role,
          });
          toastSuccess('Member updated successfully');
          setEditingMember(null);
          router.refresh();
        }}
      />

      <ModalConfirm
        isOpen={Boolean(deletingMember)}
        onClose={() => setDeletingMember(null)}
        onCancel={() => setDeletingMember(null)}
        submitLabel="Delete"
        submitColor="error"
        cancelLabel="Cancel"
        message={`Delete member "${deletingMember?.name ?? ''}" from this club?`}
        isLoading={isDeleting}
        onSubmit={() => {
          if (!deletingMember) return;
          setIsDeleting(true);
          void deleteMember(club.id, deletingMember.id)
            .then(() => {
              toastSuccess('Member deleted successfully');
              setDeletingMember(null);
              router.refresh();
            })
            .catch((err) => {
              toastError(err instanceof Error ? err.message : 'Delete member failed');
            })
            .finally(() => {
              setIsDeleting(false);
            });
        }}
      />
    </section>
  );
}

type MemberUpsertModalProps = {
  isOpen: boolean;
  mode: 'create' | 'edit';
  clubId: string;
  initialUserId?: string;
  initialRole?: ClubMemberRole;
  candidateUsers: MemberCandidateUser[];
  onClose: () => void;
  onSubmit: (
    payload:
      | { option: 'existing'; clubId: string; userId: string; role: ClubMemberRole }
      | {
          option: 'new';
          clubId: string;
          role: ClubMemberRole;
          name: string;
          email: string;
          password: string;
        },
  ) => Promise<void>;
};

const memberUpsertSchema = {
  option: z.enum(['existing', 'new']),
  userId: z.string(),
  role: z.enum([ClubMemberRole.Captain, ClubMemberRole.Coach, ClubMemberRole.Member]),
  name: z.string(),
  email: z.string(),
  password: z.string(),
};

function MemberUpsertModal({
  isOpen,
  mode,
  clubId,
  initialUserId,
  initialRole,
  candidateUsers,
  onClose,
  onSubmit,
}: MemberUpsertModalProps) {
  const [submitError, setSubmitError] = useState('');
  const userOptions: SelectOption[] = useMemo(
    () =>
      candidateUsers.map((user) => ({
        value: user.id,
        label: `${user.name} (${user.email})`,
      })),
    [candidateUsers],
  );
  const form = useAppForm({
    defaultValues: {
      option: (mode === 'edit' ? 'existing' : 'existing') as 'existing' | 'new',
      userId: initialUserId ?? '',
      role: initialRole ?? ClubMemberRole.Member,
      name: '',
      email: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      setSubmitError('');
      try {
        if (value.option === 'existing') {
          await onSubmit({
            option: 'existing',
            clubId,
            userId: value.userId.trim(),
            role: value.role,
          });
        } else {
          await onSubmit({
            option: 'new',
            clubId,
            role: value.role,
            name: value.name.trim(),
            email: value.email.trim(),
            password: value.password,
          });
        }
      } catch (err) {
        setSubmitError(err instanceof Error ? err.message : 'Something went wrong');
      }
    },
  });
  const optionValue = useStore(
    form.store,
    (state) => (state as { values: { option: OptionValue } }).values.option,
  );

  useEffect(() => {
    if (!isOpen) return;
    form.reset({
      option: (mode === 'edit' ? 'existing' : 'existing') as 'existing' | 'new',
      userId: initialUserId ?? '',
      role: initialRole ?? ClubMemberRole.Member,
      name: '',
      email: '',
      password: '',
    });
    setSubmitError('');
  }, [isOpen, initialUserId, initialRole, mode, form.reset]);

  return (
    <ModalBase isOpen={isOpen} onClose={onClose} className="w-full max-w-lg">
      <div className="flex flex-col">
        <div className="flex items-center justify-between border-b border-neutral-border px-6 py-4">
          <div className="flex items-center gap-2">
            <RenderIcon name="users" className="h-5 w-5 text-primary" />
            <h3 className="text-base font-semibold text-neutral-black">
              {mode === 'create' ? 'Add Member' : 'Edit Member'}
            </h3>
          </div>
          <IconButton
            type="button"
            icon="x-mark"
            color="neutral"
            variant="ghost"
            aria-label="Close"
            onClick={onClose}
            className="rounded-lg"
          />
        </div>
        <Form
          form={form}
          schema={memberUpsertSchema}
          validators={{
            userId: {
              onSubmit: ({ value, fieldApi }: { value: unknown; fieldApi: OptionFieldApi }) => {
                const option = fieldApi.form.state.values.option;
                if (option === 'existing' && !String(value ?? '').trim()) {
                  return 'Please choose an existing user';
                }
                return undefined;
              },
            },
            name: {
              onSubmit: ({ value, fieldApi }: { value: unknown; fieldApi: OptionFieldApi }) => {
                const option = fieldApi.form.state.values.option;
                if (option === 'new' && !String(value ?? '').trim()) {
                  return 'Name is required';
                }
                return undefined;
              },
            },
            email: {
              onSubmit: ({ value, fieldApi }: { value: unknown; fieldApi: OptionFieldApi }) => {
                const option = fieldApi.form.state.values.option;
                if (option !== 'new') return undefined;
                const email = String(value ?? '').trim();
                if (!email) return 'Email is required';
                if (!z.string().email().safeParse(email).success) return 'Invalid email';
                return undefined;
              },
            },
            password: {
              onSubmit: ({ value, fieldApi }: { value: unknown; fieldApi: OptionFieldApi }) => {
                const option = fieldApi.form.state.values.option;
                if (option === 'new' && String(value ?? '').length < 6) {
                  return 'Password must be at least 6 characters';
                }
                return undefined;
              },
            },
          }}
        >
          <div className="space-y-2 px-6 py-5">
            {mode === 'create' && (
              <FormField name="option" label="Member source" required>
                {(field) => (
                  <RadioButtonGroup<'existing' | 'new'>
                    size="small"
                    color="neutral"
                    value={field.state.value}
                    onChange={(v) => {
                      setSubmitError('');
                      // Reset hidden fields to avoid stale validation blocking submit.
                      // TanStack Form may keep errors even when fields are unmounted.
                      const current = form.state.values as unknown as {
                        userId: string;
                        role: ClubMemberRole;
                        name: string;
                        email: string;
                        password: string;
                        option: 'existing' | 'new';
                      };

                      form.reset({
                        ...current,
                        option: v,
                        userId: v === 'existing' ? current.userId : '',
                        name: v === 'new' ? current.name : '',
                        email: v === 'new' ? current.email : '',
                        password: v === 'new' ? current.password : '',
                      });

                      field.handleBlur();
                    }}
                    options={[
                      { value: 'existing', label: 'Choose existing user' },
                      { value: 'new', label: 'Create new user' },
                    ]}
                  />
                )}
              </FormField>
            )}

            {(() => {
              const isCreate = mode === 'create';
              const showExistingUser = mode === 'edit' || (isCreate && optionValue === 'existing');
              const showNewUserFields = isCreate && optionValue === 'new';

              return (
                <>
                  {showExistingUser && (
                    <FormField name="userId" label="User" required>
                      {(field) => {
                        const hasSubmitted = field.form.state.submissionAttempts > 0;
                        const fieldError =
                          (field.state.meta.isTouched || hasSubmitted) &&
                          field.state.meta.errors.length > 0
                            ? String(field.state.meta.errors[0])
                            : undefined;

                        return (
                          <Select
                            placeholder="Select existing user"
                            options={userOptions}
                            isClearable={false}
                            isSearchable
                            inputId={field.name}
                            name={field.name}
                            value={
                              userOptions.find((o) => String(o.value) === field.state.value) ?? null
                            }
                            onChange={(opt) => {
                              const o = opt as SelectOption | null;
                              field.handleChange(o ? String(o.value) : '');
                            }}
                            onBlur={() => field.handleBlur()}
                            isDisabled={mode === 'edit'}
                            error={fieldError}
                          />
                        );
                      }}
                    </FormField>
                  )}

                  {showNewUserFields && (
                    <>
                      <FormField name="name" label="Name" required>
                        <Input size="small" placeholder="Enter full name" />
                      </FormField>

                      <FormField name="email" label="Email" required>
                        <Input size="small" type="email" placeholder="Enter email" />
                      </FormField>

                      <FormField name="password" label="Password" required>
                        <Input size="small" type="password" placeholder="At least 6 characters" />
                      </FormField>
                    </>
                  )}
                </>
              );
            })()}

            <FormField name="role" label="Role">
              {(field) => (
                <RadioButtonGroup<ClubMemberRole>
                  size="small"
                  color="neutral"
                  value={field.state.value}
                  onChange={(v) => {
                    field.handleChange(v);
                    field.handleBlur();
                  }}
                  options={[
                    { value: ClubMemberRole.Member, label: 'Member' },
                    { value: ClubMemberRole.Coach, label: 'Coach' },
                    { value: ClubMemberRole.Captain, label: 'Captain' },
                  ]}
                />
              )}
            </FormField>
            {submitError && <p className="text-xs text-error">{submitError}</p>}
          </div>
          <div className="flex justify-end gap-2 border-t border-neutral-border px-6 py-4">
            <Button type="button" size="small" variant="outline" color="neutral" onClick={onClose}>
              Cancel
            </Button>
            <FormSubmit form={form}>
              {(isSubmitting) => (
                <Button type="submit" size="small" loading={isSubmitting}>
                  {mode === 'create' ? 'Add Member' : 'Save Changes'}
                </Button>
              )}
            </FormSubmit>
          </div>
        </Form>
      </div>
    </ModalBase>
  );
}
