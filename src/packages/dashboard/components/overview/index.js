import React, { useEffect, useState } from 'react';

import { LegacyDiv, LegacyParagraph } from '../../../../components';
import firstStatisticsInterface from './utils/firstStatisticsInterface';
import LoaderSpinner from '../../../../components/ui/LoaderSpinner';
import FirstStatisticsSection from './components/FirstStatisticsSection';
import WeeklyViewsChart from './components/WeeklyViewsChart';
import { endOfWeek, format, getYear, startOfWeek } from 'date-fns';
import { TbCalendarTime } from 'react-icons/tb';

export default (props) => {
  const { injectedMethods: { receiveStatisticsMethod } = {} } = props;

  const [isFetching, setIsFetching] = useState(true);
  const [fetchedInformation, setFetchedInformation] = useState({
    totalViews: 0,
    totalUsers: 0,
    totalNews: 0,
    todayViews: 0,
    weeklyViews: {},
    weeklyNews: {},
    annuallyViews: {},
  });

  useEffect(() => {
    receiveStatisticsMethod({
      callback: (result) => {
        if (result.success) {
          setFetchedInformation({
            totalViews: result.totalViews,
            totalUsers: result.totalUsers,
            totalNews: result.totalNews,
            todayViews: result.todayViews,
            weeklyViews: result.weeklyViews,
            weeklyNews: result.weeklyNews,
            annuallyViews: result.annuallyViews,
          });

          setIsFetching(false);
        }
      },
    });
  }, [isFetching]);

  const firstSection = firstStatisticsInterface(fetchedInformation);
  const { weeklyViews, weeklyNews, annuallyViews } = fetchedInformation;

  const currentDate = new Date();
  const firstDayOfWeek = startOfWeek(currentDate);
  const lastDayOfWeek = endOfWeek(currentDate);
  const currentYear = getYear(currentDate);

  const formattedFirstDay = format(firstDayOfWeek, 'dd MMM, yyyy');
  const formattedLastDay = format(lastDayOfWeek, 'dd MMM, yyyy');

  const currentWeek = `${formattedFirstDay} - ${formattedLastDay}`;

  return (
    <LegacyDiv
      styleProps={{
        ALL_DEVICES: {
          flexDirection: 'column',
          width: 'calc(100% - 324px)',
          height: '100%',
          paddingTop: '60px',
          justifyContent: 'start',
        },
      }}
    >
      {isFetching ? (
        <LoaderSpinner />
      ) : (
        <>
          <FirstStatisticsSection firstSection={firstSection} />
          <LegacyDiv
            styleProps={{
              ALL_DEVICES: {
                marginTop: '48px',
                justifyContent: 'start',
              },
            }}
          >
            <LegacyDiv
              styleProps={{
                ALL_DEVICES: {
                  width: '33%',
                  height: '340px',
                  backgroundColor: '#FFF',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 0, 0, 0.125)',
                  boxShadow:
                    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  flexDirection: 'column',
                  padding: 16,
                  justifyContent: 'space-between',
                },
              }}
            >
              <WeeklyViewsChart dataToProcess={weeklyViews} step={10} />
              <LegacyDiv
                styleProps={{
                  ALL_DEVICES: {
                    flexDirection: 'column',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                    paddingBottom: '12px',
                  },
                }}
              >
                <LegacyParagraph
                  styleProps={{
                    ALL_DEVICES: {
                      color: '#344767',
                      fontSize: '22px',
                      fontWeight: '600',
                      lineHeight: '30px',
                      width: '100%',
                      textAlign: 'start',
                    },
                  }}
                  text="Website views"
                />
                <LegacyParagraph
                  styleProps={{
                    ALL_DEVICES: {
                      color: '#7b809a',
                      fontSize: '14px',
                      fontWeight: '300',
                      lineHeight: '21px',
                      width: '100%',
                      textAlign: 'start',
                      marginTop: '8px',
                    },
                  }}
                  text="Check the weekly performance of your website with the number of views received each week."
                />
              </LegacyDiv>
              <LegacyDiv
                styleProps={{
                  ALL_DEVICES: {
                    justifyContent: 'start',
                  },
                }}
              >
                <TbCalendarTime
                  size={25}
                  style={{ color: '#7b809a', marginRight: '8px' }}
                />
                <LegacyParagraph
                  text={currentWeek}
                  styleProps={{
                    ALL_DEVICES: {
                      color: '#7b809a',
                      fontSize: '14px',
                      fontWeight: '300',
                      lineHeight: '21px',
                      width: 'fit-content',
                      textAlign: 'start',
                    },
                  }}
                />
              </LegacyDiv>
            </LegacyDiv>
            <LegacyDiv
              styleProps={{
                ALL_DEVICES: {
                  width: '33%',
                  height: '340px',
                  backgroundColor: '#FFF',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 0, 0, 0.125)',
                  boxShadow:
                    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  flexDirection: 'column',
                  padding: 16,
                  justifyContent: 'space-between',
                  margin: '0 24px',
                },
              }}
            >
              <WeeklyViewsChart
                dataToProcess={weeklyNews}
                backgroundColor="linear-gradient(195deg, #66BB6A 0%, #43A047 100%)"
              />
              <LegacyDiv
                styleProps={{
                  ALL_DEVICES: {
                    flexDirection: 'column',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                    paddingBottom: '12px',
                  },
                }}
              >
                <LegacyParagraph
                  styleProps={{
                    ALL_DEVICES: {
                      color: '#344767',
                      fontSize: '22px',
                      fontWeight: '600',
                      lineHeight: '30px',
                      width: '100%',
                      textAlign: 'start',
                    },
                  }}
                  text="Published news"
                />
                <LegacyParagraph
                  styleProps={{
                    ALL_DEVICES: {
                      color: '#7b809a',
                      fontSize: '14px',
                      fontWeight: '300',
                      lineHeight: '21px',
                      width: '100%',
                      textAlign: 'start',
                      marginTop: '8px',
                    },
                  }}
                  text="Get weekly news highlights. Stay informed with curated articles covering a wide range of topics."
                />
              </LegacyDiv>
              <LegacyDiv
                styleProps={{
                  ALL_DEVICES: {
                    justifyContent: 'start',
                  },
                }}
              >
                <TbCalendarTime
                  size={25}
                  style={{ color: '#7b809a', marginRight: '8px' }}
                />
                <LegacyParagraph
                  text={currentWeek}
                  styleProps={{
                    ALL_DEVICES: {
                      color: '#7b809a',
                      fontSize: '14px',
                      fontWeight: '300',
                      lineHeight: '21px',
                      width: 'fit-content',
                      textAlign: 'start',
                    },
                  }}
                />
              </LegacyDiv>
            </LegacyDiv>
            <LegacyDiv
              styleProps={{
                ALL_DEVICES: {
                  width: '33%',
                  height: '340px',
                  backgroundColor: '#FFF',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 0, 0, 0.125)',
                  boxShadow:
                    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  flexDirection: 'column',
                  padding: 16,
                  justifyContent: 'space-between',
                },
              }}
            >
              <WeeklyViewsChart
                dataToProcess={annuallyViews}
                completeLabel={true}
                step={10}
                backgroundColor="linear-gradient(195deg, #42424a 0%, #191919 100%)"
              />
              <LegacyDiv
                styleProps={{
                  ALL_DEVICES: {
                    flexDirection: 'column',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
                    paddingBottom: '12px',
                  },
                }}
              >
                <LegacyParagraph
                  styleProps={{
                    ALL_DEVICES: {
                      color: '#344767',
                      fontSize: '22px',
                      fontWeight: '600',
                      lineHeight: '30px',
                      width: '100%',
                      textAlign: 'start',
                    },
                  }}
                  text="Annual views"
                />
                <LegacyParagraph
                  styleProps={{
                    ALL_DEVICES: {
                      color: '#7b809a',
                      fontSize: '14px',
                      fontWeight: '300',
                      lineHeight: '21px',
                      width: '100%',
                      textAlign: 'start',
                      marginTop: '8px',
                    },
                  }}
                  text="An overview of the total number of views received throughout the year, providing insights into the overall engagement."
                />
              </LegacyDiv>
              <LegacyDiv
                styleProps={{
                  ALL_DEVICES: {
                    justifyContent: 'start',
                  },
                }}
              >
                <TbCalendarTime
                  size={25}
                  style={{ color: '#7b809a', marginRight: '8px' }}
                />
                <LegacyParagraph
                  text={`Current year: ${currentYear}`}
                  styleProps={{
                    ALL_DEVICES: {
                      color: '#7b809a',
                      fontSize: '14px',
                      fontWeight: '300',
                      lineHeight: '21px',
                      width: 'fit-content',
                      textAlign: 'start',
                    },
                  }}
                />
              </LegacyDiv>
            </LegacyDiv>
          </LegacyDiv>
        </>
      )}
    </LegacyDiv>
  );
};
