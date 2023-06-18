import React, { useEffect, useState } from 'react';
import { LegacyDiv, LegacyHeading } from '../../../../components';
import articleCardDefaultStyle from '../news-builder/styles/articleCardDefaultStyle';
import headingContainerStyleProps from '../news-builder/styles/headingContainerStyleProps';
import { headingVariants } from '../../../../types/headingVariants';
import AuthorInformationLabels from './components/AuthorInformationLabels';
import AuthorInformation from './components/AuthorInformation';
import CustomPagination from '../../../../components/ui/CustomPagination';

export default (props) => {
  const {
    injectedMethods: {
      receiveUsersMethod,
      receiveUserByIdMethod,
      deleteUserMethod,
      editUserByIdMethod,
    } = {},
    setInjectedContainer,
  } = props;

  const [fetchedEntities, setFetchEntities] = useState({
    fetchedUsers: [],
    totalUsers: 0,
  });
  const [isFetching, setIsFetching] = useState(true);
  const [pageCount, setPageCount] = useState(1);

  const { fetchedUsers, totalUsers } = fetchedEntities;

  useEffect(() => {
    receiveUsersMethod({
      params: { page: pageCount },
      callback: (result) => {
        if (result.success) {
          setFetchEntities({
            fetchedUsers: result.data,
            totalUsers: result.total,
          });

          setIsFetching(false);
        }
      },
    });
  }, [pageCount, isFetching]);

  return (
    <LegacyDiv styleProps={articleCardDefaultStyle}>
      <LegacyDiv styleProps={headingContainerStyleProps()}>
        <LegacyHeading text="Authors Table" variant={headingVariants.H2} />
      </LegacyDiv>
      <LegacyDiv
        styleProps={{
          ALL_DEVICES: { flexDirection: 'column', height: '100%' },
        }}
      >
        <AuthorInformationLabels />
        <AuthorInformation
          methods={{
            receiveUserByIdMethod,
            deleteUserMethod,
            receiveUsersMethod,
            editUserByIdMethod,
          }}
          setInjectedContainer={setInjectedContainer}
          fetchedUsers={fetchedUsers}
          fetching={isFetching}
          setIsFetching={setIsFetching}
        />
        <LegacyDiv>
          <CustomPagination
            currentPage={pageCount}
            onPageChange={(page) => setPageCount(page)}
            totalCount={totalUsers}
            pageSize={5}
          />
        </LegacyDiv>
      </LegacyDiv>
    </LegacyDiv>
  );
};
