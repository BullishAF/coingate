import { Fragment, type FunctionComponent } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

import { Pagination, Skeleton, Table as MTable, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import {
  SKELETON_TABLE_COLUMNS,
  SKELETON_TABLE_ROWS,
  SMALL_VW
} from '@/constants';

import { useStyles } from './styles';
import type { TableProps } from './types';

const Table: FunctionComponent<TableProps> = ({
  loading,
  searchable,
  searchPlaceholder,
  totalItems,
  onSearch,
  onChangePage,
  headers,
  data,
  highlightOnHover,
  ...props
}) => {
  const { classes } = useStyles();
  const {
    CenteredRow,
    NavigationWrapper,
    InputWrapper,
    SearchIcon,
    Input,
    TableWrapper
  } = classes;

  const matchSmallVW = useMediaQuery(`(max-width: ${SMALL_VW}px)`);

  const renderTableHeaders = () => {
    if (loading) {
      return Array.from({ length: SKELETON_TABLE_COLUMNS }).map((_, i) => (
        <th key={i}>
          <Skeleton width="150px" height="40px" />
        </th>
      ));
    }

    return headers.map((header) => (
      <th key={header}>
        <Text size="sm" weight={700}>
          {header}
        </Text>
      </th>
    ));
  };

  const renderTableData = () => {
    if (loading)
      return Array.from({ length: SKELETON_TABLE_ROWS }).map((_, i) => (
        <tr key={i}>
          {Array.from({ length: SKELETON_TABLE_COLUMNS }).map((_, j) => (
            <td key={j}>
              <Skeleton width="150px" height="40px" />
            </td>
          ))}
        </tr>
      ));

    if (!data || !data.length)
      return (
        <tr>
          <td className={CenteredRow} colSpan={headers.length}>
            <Text color="gray" weight="bold">
              No data to display
            </Text>
          </td>
        </tr>
      );

    return data.map((row, i) => <Fragment key={i}>{row}</Fragment>);
  };

  return (
    <>
      {(searchable || totalItems) && (
        <div className={NavigationWrapper}>
          <div className={InputWrapper}>
            {searchable && (
              <>
                <IoSearchOutline className={SearchIcon} />

                <input
                  type="text"
                  placeholder={searchPlaceholder ?? 'Search...'}
                  className={Input}
                  onChange={(e) => onSearch && onSearch(e.target.value)}
                />
              </>
            )}
          </div>

          {totalItems ? (
            <Pagination
              color="gray"
              size={matchSmallVW ? 'sm' : 'md'}
              total={totalItems}
              onChange={onChangePage}
            />
          ) : null}
        </div>
      )}

      <div className={TableWrapper}>
        <MTable
          verticalSpacing="xs"
          horizontalSpacing="xs"
          highlightOnHover={highlightOnHover && !loading}
          {...props}
        >
          <thead>
            <tr>{renderTableHeaders()}</tr>
          </thead>

          <tbody>{renderTableData()}</tbody>
        </MTable>
      </div>
    </>
  );
};

export default Table;
