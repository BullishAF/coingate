import { ChangeEvent, Fragment } from 'react';

import { Pagination, Skeleton, Table as MTable, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { useStyles } from './styles';
import type { TableProps } from './types';

const SCROLL_ACTIVE_VW = 720;

const Table = ({
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
}: TableProps) => {
  const { classes } = useStyles();
  const { CenteredRow, NavigationWrapper, InputWrapper, Input } = classes;

  const tableOverflowActive = useMediaQuery(
    `(max-width: ${SCROLL_ACTIVE_VW}px)`
  );

  const renderTableData = () => {
    if (loading)
      return Array.from({ length: 15 }).map((_, i) => (
        <tr key={i}>
          {headers?.map((_, j) => (
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
            <Text weight="bold">No data to display</Text>
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
              <input
                type="text"
                placeholder={searchPlaceholder ?? 'Search...'}
                className={Input}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onSearch!(e.target.value)
                }
              />
            )}
          </div>

          {totalItems && (
            <Pagination
              color="gray"
              radius="md"
              size={tableOverflowActive ? 'sm' : 'md'}
              total={totalItems}
              onChange={onChangePage}
            />
          )}
        </div>
      )}

      <MTable
        verticalSpacing="sm"
        horizontalSpacing="lg"
        highlightOnHover={highlightOnHover && !loading}
        {...props}
      >
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>
                <Text size="sm" weight={700}>
                  {header}
                </Text>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>{renderTableData()}</tbody>
      </MTable>
    </>
  );
};

export default Table;
