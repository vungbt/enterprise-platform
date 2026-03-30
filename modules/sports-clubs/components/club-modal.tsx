'use client';

import {
  Button,
  Form,
  FormField,
  FormSubmit,
  IconButton,
  Input,
  RadioButtonGroup,
  Select,
  type SelectOption,
  Textarea,
  toastSuccess,
  useAppForm,
  useStore,
  z,
} from '@enterprise/ui/components';
import { RenderIcon } from '@enterprise/ui/components/icons';
import { ModalBase } from '@enterprise/ui/components/modal';
import { ClubStatus } from '@gql/graphql';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { Club } from '../api/server.api';
import { useClubsApi } from '../api/use-clubs-api';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SPORT_OPTIONS = [
  'Football',
  'Badminton',
  'Pickleball',
  'Basketball',
  'Volleyball',
  'Swimming',
  'Tennis',
  'Other',
];

const SPORT_SELECT_OPTIONS: SelectOption[] = SPORT_OPTIONS.map((s) => ({ label: s, value: s }));

const modalSelectMenuPortalStyles = {
  menuPortal: (base: Record<string, unknown>) => ({ ...base, zIndex: 10_000 }),
};

const clubSchema = {
  name: z.string().min(1, 'Club name is required'),
  sport: z.string(),
  customSport: z.string(),
  description: z.string(),
  status: z.enum([ClubStatus.Active, ClubStatus.Inactive]),
};

type ClubModalFormValues = {
  name: string;
  sport: string;
  customSport: string;
  description: string;
  status: ClubStatus;
};

type ClubModalProps = Props & {
  editClub?: Club;
};

function getSportValues(clubSport: string) {
  const isKnown = SPORT_OPTIONS.includes(clubSport as (typeof SPORT_OPTIONS)[number]);
  const isOther = clubSport === 'Other';

  // When user selects "Other" in the UI: send the custom sport string to backend.
  // So the value coming from API is usually not "Other" but the actual custom value.
  if (!isKnown || isOther) {
    return { sport: 'Other', customSport: isOther ? '' : clubSport };
  }

  return { sport: clubSport, customSport: '' };
}

function ClubModal({ isOpen, onClose, editClub }: ClubModalProps) {
  const router = useRouter();
  const { createClub, updateClub } = useClubsApi();
  const [submitError, setSubmitError] = useState('');

  const initialSportValues = editClub
    ? getSportValues(editClub.sport)
    : { sport: '', customSport: '' };

  const initialValues: ClubModalFormValues = {
    name: editClub?.name ?? '',
    sport: initialSportValues.sport,
    customSport: initialSportValues.customSport,
    description: '',
    status: editClub?.status ?? ClubStatus.Active,
  };

  const form = useAppForm({
    defaultValues: initialValues,
    validators: {
      onSubmit: ({ value }) => {
        const final = value.sport === 'Other' ? value.customSport : value.sport;
        if (!final?.trim()) {
          return { fields: { sport: 'Sport is required' } };
        }
        return undefined;
      },
    },
    onSubmit: async ({ value }) => {
      setSubmitError('');
      const finalSport = value.sport === 'Other' ? value.customSport : value.sport;
      try {
        if (editClub) {
          await updateClub(editClub.id, {
            name: value.name.trim(),
            sport: finalSport.trim(),
            description: value.description.trim() || undefined,
            status: value.status,
          });
          toastSuccess('Club updated successfully!');
        } else {
          await createClub({
            name: value.name.trim(),
            sport: finalSport.trim(),
            description: value.description.trim() || undefined,
            status: value.status,
          });
          toastSuccess('Club created successfully!');
        }

        form.reset();
        onClose();
        router.refresh();
      } catch (err) {
        setSubmitError(err instanceof Error ? err.message : 'Something went wrong');
      }
    },
  });

  const sportValue = useStore(
    form.store,
    (s) => (s as { values: ClubModalFormValues }).values.sport,
  );

  function handleClose() {
    form.reset();
    setSubmitError('');
    onClose();
  }

  return (
    <ModalBase isOpen={isOpen} onClose={handleClose} className="w-full max-w-lg">
      <div className="flex flex-col">
        <div className="flex items-center justify-between border-b border-neutral-border px-6 py-4">
          <div className="flex items-center gap-2">
            <RenderIcon name="trophy" className="h-5 w-5 text-primary" />
            <h3 className="text-base font-semibold text-neutral-black">
              {editClub ? 'Edit Club' : 'Create New Club'}
            </h3>
          </div>
          <IconButton
            type="button"
            icon="x-mark"
            color="neutral"
            variant="ghost"
            aria-label="Close"
            onClick={handleClose}
            className="rounded-lg"
          />
        </div>

        <Form form={form} schema={clubSchema}>
          <div className="space-y-1 px-6 py-5">
            <FormField name="name" label="Club Name" required>
              <Input placeholder="e.g. Saigon FC" />
            </FormField>

            <FormField name="sport" label="Sport" required>
              {(field) => (
                <Select
                  size="small"
                  placeholder="-- Select sport --"
                  options={SPORT_SELECT_OPTIONS}
                  isClearable={false}
                  isSearchable
                  inputId={field.name}
                  name={field.name}
                  value={
                    SPORT_SELECT_OPTIONS.find((o) => String(o.value) === field.state.value) ?? null
                  }
                  onChange={(opt) => {
                    const o = opt as SelectOption | null;
                    field.handleChange(o ? String(o.value) : '');
                  }}
                  onBlur={() => field.handleBlur()}
                  menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
                  styles={modalSelectMenuPortalStyles}
                />
              )}
            </FormField>

            {sportValue === 'Other' && (
              <FormField name="customSport" label="Custom sport" className="!mt-2">
                <Input placeholder="Enter sport name" />
              </FormField>
            )}

            <FormField name="status" label="Status">
              {(field) => (
                <RadioButtonGroup
                  size="small"
                  color="neutral"
                  equalWidth
                  value={field.state.value}
                  onChange={(v) => {
                    field.handleChange(v);
                    field.handleBlur();
                  }}
                  options={[
                    { value: 'active', label: 'Active' },
                    { value: 'inactive', label: 'Inactive' },
                  ]}
                />
              )}
            </FormField>

            <FormField name="description" label="Description" className="!mb-0">
              <Textarea rows={3} size="small" placeholder="Brief description of the club..." />
            </FormField>

            {submitError && (
              <div className="flex items-center gap-2 rounded-lg bg-error-bg px-3 py-2">
                <RenderIcon name="exclamation-circle" className="h-4 w-4 shrink-0 text-error" />
                <p className="text-xs text-error">{submitError}</p>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2 border-t border-neutral-border px-6 py-4">
            <Button
              type="button"
              size="small"
              variant="outline"
              color="neutral"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <FormSubmit form={form}>
              {(isSubmitting) => (
                <Button type="submit" size="small" icon="plus" loading={isSubmitting}>
                  {editClub ? 'Update Club' : 'Create Club'}
                </Button>
              )}
            </FormSubmit>
          </div>
        </Form>
      </div>
    </ModalBase>
  );
}

export function CreateClubModal({ isOpen, onClose }: Props) {
  return <ClubModal isOpen={isOpen} onClose={onClose} />;
}

export function EditClubModal({ club, isOpen, onClose }: { club: Club } & Props) {
  return <ClubModal isOpen={isOpen} onClose={onClose} editClub={club} />;
}
