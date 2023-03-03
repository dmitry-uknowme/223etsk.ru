import { TriangleDownIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  SlideFade,
  theme,
  ThemeProvider,
  useAccordion,
} from "@chakra-ui/react";
import { Select } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import searchTenders, { defaultFilter } from "../../renderer/api/searchTenders";
import HistoryBar from "../../renderer/components/layouts/HistoryBar";
import MainLayout from "../../renderer/components/layouts/MainLayout";
import TenderCard from "../../renderer/components/sections/TenderCard";
import Filter from "../../renderer/components/sections/TendersFilter";
import Search from "../../renderer/components/sections/TendersSearch";
import Button, { ButtonVariants } from "../../renderer/components/ui/Button";
import tenderFixture from "./tender.fixture";
import {
  ITender,
  ITenderMethodVariants,
  ITenderStatusVariants,
} from "../../renderer/types/tender";
import useDebounce from "../../renderer/hooks/useDebounce";

interface TendersPageProps {
  serverTenders: ITender[];
  serverTendersCount: number;
}

const localizedSections = [
  {
    id: 1,
    value: "SECTION_COMMERCIAL_PROCEDURES",
    label: "Коммерческие торги",
  },
  { id: 2, value: "SECTION_223_FZ", label: "223-ФЗ" },
];

const localizedStatuses = [
  // {
  //   id: 0,
  //   value: "ALL",
  //   label: "Все статусы",
  // },
  {
    id: 1,
    value: ITenderStatusVariants.ACCEPTING_APPLICATIONS,
    label: "Идет прием заявок",
  },
  {
    id: 2,
    value: ITenderStatusVariants.REVIEW_APPLICATIONS,
    label: "Рассмотрение заявок",
  },
  {
    id: 3,
    value: ITenderStatusVariants.BIDDING_PROCESS,
    label: "Идут торги",
  },
  {
    id: 4,
    value: ITenderStatusVariants.SUMMING_UP_APPLICATIONS,
    label: "Подведение итогов",
  },
  {
    id: 5,
    value: ITenderStatusVariants.BIDDING_COMPLETED,
    label: "Торги завершены",
  },
  {
    id: 6,
    value: 'STATUS_CANCEL',
    label: "Торги отменены",
  },
  {
    id: 7,
    value: ITenderStatusVariants.ACTIVE,
    label: "Опубликована",
  },
];

const localizedMethods = [
  {
    id: 1,
    value: ITenderMethodVariants.AUCTION,
    label: "Аукцион",
  },
  {
    id: 2,
    value: ITenderMethodVariants.AUCTION_DOWN,
    label: "Редукцион",
  },
  {
    id: 3,
    value: ITenderMethodVariants.AUCTION_LOWER,
    label: "Аукцион на понижение",
  },
  {
    id: 4,
    value: ITenderMethodVariants.COMPETITIVE_SELECTION,
    label: "Конкурентный отбор",
  },
  {
    id: 5,
    value: ITenderMethodVariants.CONTEST,
    label: "Конкурс",
  },
  {
    id: 6,
    value: ITenderMethodVariants.MAKE_OFFERS,
    label: "Предложение делать оферты",
  },
  {
    id: 7,
    value: ITenderMethodVariants.REQUEST_OFFERS,
    label: "Запрос предложений",
  },
  {
    id: 8,
    value: ITenderMethodVariants.REQUEST_QUOTATION,
    label: "Запрос котировок",
  },
  {
    id: 9,
    value: ITenderMethodVariants.TWO_STAGE_AUCTION,
    label: "Двухэтапный аукцион",
  },
  {
    id: 10,
    value: ITenderMethodVariants.REQUEST_PRICE,
    label: "Двухэтапный аукцион",
  },
];

const TendersPage: React.FC<TendersPageProps> = () => {
  const [isReadyApplyFilters, setReadyApplyFilters] = useState<boolean>(false);
  const [isFiltersOpened, setFiltersOpened] = useState(false);
  const [filters, setFilters] = useState(defaultFilter);
  const debounceReadyFilters = useDebounce(
    () => setReadyApplyFilters(true),
    500
  );

  const queryClient = useQueryClient();
  const query = useQuery(
    "tenders",
    async () => {
      const data = await searchTenders();
      return {
        items: data.data,
        itemsCount: data.total_count,
      };
    }
    // {
    //   placeholderData: {
    //     items: new Array(10).fill(tenderFixture),
    //     itemsCount: 10,
    //   },
    // }
  );
  const tenders = query?.data?.items as ITender[];
  const tendersCount = query?.data?.itemsCount;

  const { mutate: updateTenders } = useMutation(() => searchTenders(filters), {
    onSuccess: async (data, variables) => {
      queryClient.setQueryData("tenders", () => ({
        items: data.data,
        itemsCount: data.total_count,
      }));
    },
  });

  const { Option, OptGroup } = Select;

  // useEffect(() => {
  //   if (
  //     filters.statuses === defaultFilter.statuses ||
  //     // filters.statuses.length === 0 ||
  //     filters.statuses.includes("ALL")
  //   ) {
  //     // filters.
  //   }
  // }, [filters.statuses]);

  // console.log("fff", filters.statuses);

  useEffect(() => {
    // updateTenders();
    if (defaultFilter === filters) {
      debounceReadyFilters();
    }

    // setTimeout(() => {
    //   setReadyApplyFilters(false);
    // }, 2500);
  }, [filters]);

  return (
    <MainLayout>
      <ThemeProvider theme={theme}>
        <ChakraProvider theme={theme}>
          {/* <div style={{ background: "#f5f5f5" }}> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isReadyApplyFilters ? { opacity: "1" } : { opacity: "0" }}
          >
            <Button
              label="Применить"
              variant={ButtonVariants.SECONDARY}
              style={{
                opacity: 0.85,
                height: "30px",
                position: "fixed",
                bottom: "20%",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: "200",
              }}
              onClick={() => {
                //console.log("flllllll", filters, defaultFilter);
                updateTenders();
              }}
            ></Button>
          </motion.div>
          <div className="container">
            <div className="row align-items-center">
              <HistoryBar
                historyData={[
                  { label: "Главная", path: "/", active: true },
                  {
                    label: "Поиск закупок",
                    path: "/tenders",
                    // active: true,
                  },
                ]}
              />

              {/* Способы проведения
                    <input
                        type="checkbox"
                        onChange={(e) => {
                            if (e.target.checked) {
                                setFilters((state) => ({
                                    ...state,
                                    methods: ["AUCTION_LOWER"],
                                }));
                            }
                        }}
                    /> */}
              <h2 className="text-black mb-3">Поиск закупок</h2>
              <div className="col-md-10">
                <Search />
              </div>
              <div className="col-md-2 d-flex justify-content-end">
                <Button
                  variant={ButtonVariants.SECONDARY}
                  label="Фильтры"
                  style={{
                    padding: "0.6rem 3rem 0.6rem 1rem",
                    height: "32px",
                    position: "relative",
                  }}
                  onClick={() => setFiltersOpened((state) => !state)}
                >
                  <TriangleDownIcon
                    style={{
                      top: "50%",
                      transform: "translateY(-50%)",
                      right: "11%",
                      position: "absolute",
                      fontSize: "0.5rem",
                    }}
                  />
                </Button>
              </div>
              {/* <div
                className="col-md-4"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ fontWeight: 500 }}>Фильтры:</div>
                <Select
                  mode="tags"
                  maxTagCount={5}
                  defaultValue={["Все торги"]}
                  style={{
                    minWidth: "90%",
                    fontSize: "0.8rem",
                    marginTop: "0.2rem",
                    // fontWeight: 700,
                    // marginLeft: "1rem",
                  }}
                  // style={{ borderRadius: "2em" }}
                >
                  <OptGroup label="Секции размещения">
                    <Option value="FZ223">223-ФЗ</Option>
                    <Option value="MARKET">ЭТСК-маркет</Option>
                  </OptGroup>
                  <OptGroup label="Способы проведения">
                    <Option value="AUCTION_DOWN">Аукцион</Option>
                    <Option value="AUCTION_UP">Аукцион на повышение</Option>
                    <Option value="CONTEST">Конкурс</Option>
                    <Option value="REQUEST_QUOTATATIONS">
                      Запрос котировок
                    </Option>
                    <Option value="REQUEST_OFFERS">Запрос предложений</Option>
                    <Option value="MAKE_OFFERS">
                      Предложение делать оферты
                    </Option>
                    <Option value="COMPETITIVE_SELECTION">
                      Конкурентный отбор
                    </Option>
                  </OptGroup>
                </Select>
              </div> */}
              <Fade
                duration={200}
                in={isFiltersOpened}
                // style={
                //   isFiltersOpened
                //   // ? { width: "0", height: "0" }
                //   // : { width: "auto", height: "auto" }
                // }
              >
                <Accordion
                  className="mt-5"
                  index={isFiltersOpened ? 0 : 1}
                  allowToggle
                >
                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "#3BB1E3", color: "white" }}
                        onClick={() => setFiltersOpened((state) => !state)}
                      >
                        <Box flex="1" textAlign="left">
                          Расширенный поиск
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <div className="row mt-3">
                        <div className="col-md-4">
                          <FormControl>
                            <FormLabel>Секции размещения:</FormLabel>
                            <Select
                              mode="tags"
                              maxTagCount={5}
                              // defaultValue={["ALL"]}
                              style={{ width: "100%" }}
                              options={[
                                // localizedStatuses[0],
                                ...defaultFilter.sections.map((s) =>
                                  localizedSections.find((s2) => s2.value === s)
                                ),
                              ]}
                              value={filters.sections.map((s) =>
                                localizedSections.find((s2) => s2.value === s)
                              )}
                              onChange={(sections: string[]) => {
                                // console.log("sttt", statuses);
                                setFilters((state) => ({
                                  ...state,
                                  sections,
                                }));
                              }}
                            >
                              {/* <Option value="ALL">Все секции</Option>
                              <Option value="FZ223">223-ФЗ</Option>
                              <Option value="MARKET">ЭТСК-маркет</Option> */}
                            </Select>
                          </FormControl>
                        </div>
                        <div className="col-md-4">
                          <FormControl>
                            <FormLabel>Способы проведения:</FormLabel>
                            <Select
                              mode="tags"
                              maxTagCount={5}
                              defaultValue={["ALL"]}
                              style={{ width: "100%" }}
                              options={[
                                // localizedStatuses[0],
                                ...defaultFilter.methods.map((s) =>
                                  localizedMethods.find((s2) => s2.value === s)
                                ),
                              ]}
                              value={filters.methods.map((s) =>
                                localizedMethods.find((s2) => s2.value === s)
                              )}
                              onChange={(methods: string[]) => {
                                // console.log("sttt", statuses);
                                setFilters((state) => ({
                                  ...state,
                                  methods,
                                }));
                              }}
                            ></Select>
                          </FormControl>
                        </div>
                        <div className="col-md-4">
                          <FormControl>
                            <FormLabel>Статусы процедур:</FormLabel>
                            <Select
                              mode="tags"
                              maxTagCount={5}
                              style={{ width: "100%" }}
                              onChange={(statuses: string[]) => {
                                // console.log("sttt", statuses);
                                setFilters((state) => ({
                                  ...state,
                                  statuses,
                                }));
                              }}
                              options={[
                                // localizedStatuses[0],
                                ...defaultFilter.statuses.map((s) =>
                                  localizedStatuses.find((s2) => s2.value === s)
                                ),
                              ]}
                              value={filters.statuses.map((s) =>
                                localizedStatuses.find((s2) => s2.value === s)
                              )}
                            ></Select>
                          </FormControl>
                        </div>
                        <div className="col-md-4 mt-4">
                          <FormControl>
                            <FormLabel>Заказчик или организатор:</FormLabel>
                            <Input
                              style={{
                                height: "30px",
                                background: "white",
                                borderRadius: "0.5em !important",
                              }}
                            />
                          </FormControl>
                        </div>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Fade>
              <div className="col-md-12">
                <div className="mt-5">
                  <table
                    className="table-responsive table-bordered tender_list table-hover"
                    cellSpacing={0}
                  >
                    <thead>
                      <tr>
                        <th>
                          <p>№</p>
                        </th>
                        <th style={{ maxWidth: "25%" }}>
                          <p>Наименование процедуры</p>
                        </th>
                        <th>Секция размещения</th>
                        <th>Способ проведения</th>
                        <th style={{ width: "13%" }}>Начальная цена</th>
                        <th>Организатор</th>
                        <th>Дата начала подачи заявок</th>
                        <th>Дата окончания подачи заявок</th>
                        <th>Дата начала торгов</th>
                        <th>Статус</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tenders?.length
                        ? tenders.map((tender) => (
                            <tr
                              key={tender.id}
                              onClick={() =>
                                // window.history.pushState(
                                //   null,
                                //   "",
                                //   `/tenders/${tender.id}`
                                // )
                                window.location.replace(`/tenders/${tender.id}`)
                              }
                            >
                              <td>
                                <a className="text-primary">
                                  {query.isPlaceholderData ?? "prevvv"}
                                  {tender.number}/1
                                </a>
                              </td>
                              <td>
                                <p>
                                  <b>
                                    <a className="text-primary">
                                      {tender.title}
                                    </a>
                                  </b>
                                </p>
                              </td>
                              <td>
                                <p
                                  style={{
                                    fontSize: "0.87rem",
                                  }}
                                >
                                  {tender.platform_type_localized}
                                </p>
                              </td>
                              <td>
                                <p
                                  style={{
                                    fontSize: "0.87rem",
                                  }}
                                >
                                  {tender.type_localized}
                                </p>
                              </td>
                              <td>
                                <p
                                  className="text-secondary"
                                  style={{
                                    fontWeight: 700,
                                    margin: "0.2rem 0.4rem",
                                  }}
                                >
                                  
                                  {tender.price_localized}
                                </p>
                              </td>
                              <td>{tender.organizer_short_title}</td>
                              <td className="tender_date">
                                <p
                                  className="text-primary"
                                  style={{
                                    fontWeight: 500,
                                  }}
                                >
                                  {tender.start_bid_date}
                                </p>
                              </td>
                              <td className="tender_date">
                                {tender.close_bid_date}
                              </td>
                              <td className="tender_date">
                                {tender.start_trade_date}
                              </td>
                              <td>
                                <p
                                  className="text-muted"
                                  style={{
                                    fontWeight: 300,
                                  }}
                                >
                                  {tender.status_localized}
                                </p>
                              </td>
                            </tr>
                          ))
                        : ""}
                    </tbody>
                  </table>
                </div>
                {/* <div className="mt-5">
                            <TenderCard />
                        </div>
                        <div className="mt-4">
                            <TenderCard />
                        </div>
                        <div className="mt-4">
                            <TenderCard />
                        </div> */}
              </div>
              {/* <div className="col-md-3 offset-md-1 mt-5">
                        <Filter />
                    </div> */}
            </div>
          </div>
          {/* </div> */}
        </ChakraProvider>
      </ThemeProvider>
    </MainLayout>
  );
};

export default TendersPage;

// if (
//   statuses === defaultFilter.statuses ||
//   // filters.statuses.length === 0 ||
//   statuses.includes("ALL")
// ) {
// setFilters((state) => ({
//   ...state,
//   statuses: statuses /* .filter(
//     (sta
