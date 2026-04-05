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
import { ClubMemberStatus } from '@gql/graphql';
import type { ColumnDef } from '@tanstack/react-table';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

type MemberStatus = 'active' | 'inactive';
type OptionValue = 'existing' | 'new';

type Member = {
  id: string;
  userId: string | null;
  name: string;
  email: string;
  phone: string;
  status: MemberStatus;
  createdAt: string;
};

function mapMemberRowStatus(status: ClubMemberStatus): MemberStatus {
  if (status === ClubMemberStatus.Active) return 'active';
  return 'inactive';
}

function mapMembers(input: ClubMember[]): Member[] {
  return input.map((member) => ({
    id: member.id,
    userId: member.userId ?? null,
    name: member.displayName,
    email: member.email ?? '',
    phone: member.phone ?? '',
    status: mapMemberRowStatus(member.status),
    createdAt: new Date(member.createdAt).toLocaleDateString('en-US'),
  }));
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
  const { createMember, deleteMember } = useMembersApi();
  const [tab, setTab] = useState<'all' | MemberStatus>('all');
  const [page, setPage] = useState(1);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
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
      { header: 'Phone', accessorKey: 'phone' },
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
      { header: 'Created', accessorKey: 'createdAt' },
      {
        header: 'Actions',
        id: 'actions',
        cell: ({ row }) => (
          <div className="flex gap-1">
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
                label: `Active (${members.filter((m) => m.status === 'active').length})`,
              },
              {
                value: 'inactive',
                label: `Inactive (${members.filter((m) => m.status === 'inactive').length})`,
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

      <MemberCreateModal
        isOpen={isCreateOpen}
        clubId={club.id}
        candidateUsers={candidateUsers}
        onClose={() => setIsCreateOpen(false)}
        onSubmit={async (payload) => {
          await createMember(payload);
          toastSuccess('Member added successfully');
          setIsCreateOpen(false);
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
          void deleteMember(deletingMember.id)
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

type MemberCreatePayload = {
  clubId: string;
  userId?: string | null;
  displayName: string;
  email?: string | null;
  phone?: string | null;
};

type MemberCreateModalProps = {
  isOpen: boolean;
  clubId: string;
  candidateUsers: MemberCandidateUser[];
  onClose: () => void;
  onSubmit: (payload: MemberCreatePayload) => Promise<void>;
};

const memberCreateSchema = {
  option: z.enum(['existing', 'new']),
  userId: z.string(),
  displayName: z.string(),
  email: z.string(),
  phone: z.string(),
};

function MemberCreateModal({
  isOpen,
  clubId,
  candidateUsers,
  onClose,
  onSubmit,
}: MemberCreateModalProps) {
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
      option: 'existing' as OptionValue,
      userId: '',
      displayName: '',
      email: '',
      phone: '',
    },
    onSubmit: async ({ value }) => {
      setSubmitError('');
      try {
        if (value.option === 'existing') {
          const user = candidateUsers.find((u) => u.id === value.userId.trim());
          await onSubmit({
            clubId,
            userId: value.userId.trim(),
            displayName: user?.name ?? '',
          });
        } else {
          await onSubmit({
            clubId,
            displayName: value.displayName.trim(),
            email: value.email.trim() || null,
            phone: value.phone.trim() || null,
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
    form.reset({ option: 'existing', userId: '', displayName: '', email: '', phone: '' });
    setSubmitError('');
  }, [isOpen, form.reset]);

  return (
    <ModalBase isOpen={isOpen} onClose={onClose} className="w-full max-w-lg">
      <div className="flex flex-col">
        <div className="flex items-center justify-between border-b border-neutral-border px-6 py-4">
          <div className="flex items-center gap-2">
            <RenderIcon name="users" className="h-5 w-5 text-primary" />
            <h3 className="text-base font-semibold text-neutral-black">Add Member</h3>
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
          schema={memberCreateSchema}
          validators={{
            userId: {
              onSubmit: ({
                value,
                fieldApi,
              }: {
                value: unknown;
                fieldApi: { form: { state: { values: { option: OptionValue } } } };
              }) => {
                if (
                  fieldApi.form.state.values.option === 'existing' &&
                  !String(value ?? '').trim()
                ) {
                  return 'Please choose an existing user';
                }
                return undefined;
              },
            },
            displayName: {
              onSubmit: ({
                value,
                fieldApi,
              }: {
                value: unknown;
                fieldApi: { form: { state: { values: { option: OptionValue } } } };
              }) => {
                if (fieldApi.form.state.values.option === 'new' && !String(value ?? '').trim()) {
                  return 'Display name is required';
                }
                return undefined;
              },
            },
          }}
        >
          <div className="space-y-2 px-6 py-5">
            <FormField name="option" label="Member source" required>
              {(field) => (
                <RadioButtonGroup<OptionValue>
                  size="small"
                  color="neutral"
                  value={field.state.value}
                  onChange={(v) => {
                    setSubmitError('');
                    form.reset({
                      ...form.state.values,
                      option: v,
                      userId: v === 'existing' ? form.state.values.userId : '',
                      displayName: v === 'new' ? form.state.values.displayName : '',
                      email: v === 'new' ? form.state.values.email : '',
                      phone: v === 'new' ? form.state.values.phone : '',
                    });
                    field.handleBlur();
                  }}
                  options={[
                    { value: 'existing', label: 'Select existing user' },
                    { value: 'new', label: 'Add new member' },
                  ]}
                />
              )}
            </FormField>

            {optionValue === 'existing' && (
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
                      value={userOptions.find((o) => String(o.value) === field.state.value) ?? null}
                      onChange={(opt) => {
                        const o = opt as SelectOption | null;
                        field.handleChange(o ? String(o.value) : '');
                      }}
                      onBlur={() => field.handleBlur()}
                      error={fieldError}
                    />
                  );
                }}
              </FormField>
            )}

            {optionValue === 'new' && (
              <>
                <FormField name="displayName" label="Display Name" required>
                  <Input size="small" placeholder="Enter display name" />
                </FormField>
                <FormField name="email" label="Email">
                  <Input size="small" type="email" placeholder="Enter email (optional)" />
                </FormField>
                <FormField name="phone" label="Phone">
                  <Input size="small" placeholder="Enter phone (optional)" />
                </FormField>
              </>
            )}

            {submitError && <p className="text-xs text-error">{submitError}</p>}
          </div>
          <div className="flex justify-end gap-2 border-t border-neutral-border px-6 py-4">
            <Button type="button" size="small" variant="outline" color="neutral" onClick={onClose}>
              Cancel
            </Button>
            <FormSubmit form={form}>
              {(isSubmitting) => (
                <Button type="submit" size="small" loading={isSubmitting}>
                  Add Member
                </Button>
              )}
            </FormSubmit>
          </div>
        </Form>
      </div>
    </ModalBase>
  );
}
