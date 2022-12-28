import { ChangeEvent, Fragment } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

import { Pagination, Skeleton, Table as MTable, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { SMALL_VW } from '@/constants';

import { useStyles } from './styles';
import type { TableProps } from './types';

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
  const { CenteredRow, NavigationWrapper, InputWrapper, SearchIcon, Input } =
    classes;

  const isSmallScreen = useMediaQuery(`(max-width: ${SMALL_VW}px)`);

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
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onSearch!(e.target.value)
                  }
                />
              </>
            )}
          </div>

          {totalItems ? (
            <Pagination
              color="dark"
              size={isSmallScreen ? 'sm' : 'md'}
              total={totalItems}
              onChange={onChangePage}
            />
          ) : null}
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
