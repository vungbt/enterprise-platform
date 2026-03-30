'use client';

import {
  Button,
  DrawerBase,
  Form,
  FormField,
  IconButton,
  Input,
  RadioButtonGroup,
  Select,
  type SelectOption,
  useAppForm,
  useStore,
} from '@enterprise/ui/components';
import { useMemo, useState } from 'react';
import type { ClubDto } from '../api/sports-clubs.api';
import { ClubCard } from '../components/club-card';
import { CreateClubModal } from '../components/club-modal';
import { ClubsTable } from '../components/clubs-table';

type View = 'grid' | 'table';

type ClubFiltersValues = {
  search: string;
  filterSport: string;
  filterStatus: '' | 'active' | 'inactive';
};

const SPORT_FILTER_OPTIONS = [
  'Football',
  'Badminton',
  'Pickleball',
  'Basketball',
  'Volleyball',
  'Swimming',
  'Tennis',
  'Other',
];

const SPORT_FILTER_SELECT_OPTIONS: SelectOption[] = SPORT_FILTER_OPTIONS.map((s) => ({
  label: s,
  value: s,
}));

const STATUS_FILTER_SELECT_OPTIONS: SelectOption[] = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
];

type ClubsViewProps = {
  clubs: ClubDto[];
};

export function ClubsView({ clubs }: ClubsViewProps) {
  const [view, setView] = useState<View>('grid');
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filterForm = useAppForm({
    defaultValues: {
      search: '',
      filterSport: '',
      filterStatus: '' as '' | 'active' | 'inactive',
    },
    onSubmit: () => {},
  });

  const filterValues = useStore(
    filterForm.store,
    (s) => (s as { values: ClubFiltersValues }).values,
  );

  const filteredClubs = useMemo(() => {
    const { search, filterSport, filterStatus } = filterValues;
    return clubs.filter((club) => {
      if (search && !club.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (filterSport && club.sport !== filterSport) return false;
      if (filterStatus && club.status !== filterStatus) return false;
      return true;
    });
  }, [clubs, filterValues]);

  const hasActiveFilters =
    filterValues.search || filterValues.filterSport || filterValues.filterStatus;

  function clearFilters() {
    filterForm.reset();
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-black">Club Management</h2>
          <p className="mt-1 text-sm text-neutral-text-secondary">
            Oversee and manage elite athletic organizations across the platform.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <RadioButtonGroup<View>
            size="small"
            color="neutral"
            value={view}
            onChange={setView}
            options={[
              { value: 'grid', label: 'Grid', icon: 'vuesax-element' },
              { value: 'table', label: 'Table', icon: 'list' },
            ]}
          />

          <Button
            size="small"
            variant="outline"
            color="neutral"
            icon="adjustments-vertical"
            onClick={() => setFiltersOpen((v) => !v)}
          >
            Filters{hasActiveFilters ? ' •' : ''}
          </Button>

          <Button size="small" icon="plus" onClick={() => setIsCreateOpen(true)}>
            New Club
          </Button>
        </div>
      </div>

      <DrawerBase isOpen={filtersOpen} onClose={() => setFiltersOpen(false)}>
        <div className="flex h-full min-h-0 flex-col">
          <div className="flex items-start justify-between gap-3 border-b border-neutral-border px-4 py-4">
            <div>
              <h3 className="text-base font-semibold text-neutral-black">Filters</h3>
              <p className="mt-0.5 text-xs text-neutral-text-secondary">Refine the club list</p>
            </div>
            <IconButton
              type="button"
              icon="x-mark"
              color="neutral"
              variant="ghost"
              aria-label="Close filters"
              onClick={() => setFiltersOpen(false)}
              className="rounded-lg"
            />
          </div>

          <Form form={filterForm} className="flex min-h-0 flex-1 flex-col">
            <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
              <FormField name="search" label="Search" className="!mb-3">
                <Input placeholder="Club name..." />
              </FormField>

              <FormField name="filterSport" label="Sport" className="!mb-3">
                {(field) => (
                  <Select
                    placeholder="All sports"
                    options={SPORT_FILTER_SELECT_OPTIONS}
                    isClearable
                    isSearchable
                    inputId={field.name}
                    name={field.name}
                    value={
                      SPORT_FILTER_SELECT_OPTIONS.find(
                        (o) => String(o.value) === field.state.value,
                      ) ?? null
                    }
                    onChange={(opt) => {
                      const o = opt as SelectOption | null;
                      field.handleChange(o ? String(o.value) : '');
                    }}
                    onBlur={() => field.handleBlur()}
                    menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
                  />
                )}
              </FormField>

              <FormField name="filterStatus" label="Status" className="!mb-0">
                {(field) => (
                  <Select
                    placeholder="All statuses"
                    options={STATUS_FILTER_SELECT_OPTIONS}
                    isClearable
                    isSearchable={false}
                    inputId={field.name}
                    name={field.name}
                    value={
                      field.state.value === ''
                        ? null
                        : (STATUS_FILTER_SELECT_OPTIONS.find(
                            (o) => o.value === field.state.value,
                          ) ?? null)
                    }
                    onChange={(opt) => {
                      const o = opt as SelectOption | null;
                      field.handleChange(
                        o ? (String(o.value) as 'active' | 'inactive') : ('' as const),
                      );
                    }}
                    onBlur={() => field.handleBlur()}
                    menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
                  />
                )}
              </FormField>
            </div>
            {hasActiveFilters && (
              <div className="border-t border-neutral-border px-4 py-3">
                <Button
                  type="button"
                  variant="text"
                  color="neutral"
                  icon="x-mark"
                  className="w-full justify-center"
                  onClick={clearFilters}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </Form>
        </div>
      </DrawerBase>

      {hasActiveFilters && (
        <p className="text-sm text-neutral-text-secondary">
          Showing <span className="font-medium text-neutral-black">{filteredClubs.length}</span> of{' '}
          {clubs.length} clubs
        </p>
      )}

      {view === 'grid' ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredClubs.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      ) : (
        <ClubsTable clubs={filteredClubs} />
      )}

      <CreateClubModal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
    </div>
  );
}
