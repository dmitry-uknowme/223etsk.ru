import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Select,
  Textarea,
  RadioGroup,
  Stack,
  Radio,
  ThemeProvider,
  ChakraProvider,
  theme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import HistoryBar from "../../renderer/components/layouts/HistoryBar";
import MainLayout from "../../renderer/components/layouts/MainLayout";
import fetchFeedbackFormTypes from "../../renderer/api/fetchFeedbackFormTypes";
import { useQuery } from "react-query";
import axios from "axios";

const SupportPage = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const { data: formTypes } = useQuery("feedback_form_types", () =>
    fetchFeedbackFormTypes()
  );

  console.log("fff", formTypes);
  const {
    getValues,
    handleSubmit,
    register,
    watch,
    setValue,
    setError,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm();

  const isAccreditedValue = watch("accredit_status");

  const onSubmit = async (values) => {
    // axios.post('')
    console.log("valll", {
      type: values.type,
      type_organization: values.user_role,
      status_accreditation: values.accredit_status,
      email: values.user_email,
      full_name: values.user_fullname,
      position: values.user_position,
      full_name_organization: values.user_org_name,
      inn: values.user_inn,
      message: values.text,
    });
  };

  useEffect(() => {
    register("accredit_status");
  }, [register]);

  useEffect(() => {
    setValue("accredit_status", "not_accredited");
  }, []);

  return (
    <MainLayout>
      <ThemeProvider theme={theme}>
        <ChakraProvider theme={theme}>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Создание обращения</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>
                  Обращение успешно создано. Вам будет направлен ответ на
                  указанный email адрес.
                </p>
              </ModalBody>
            </ModalContent>
          </Modal>
          <div className="container">
            <div className="row">
              <HistoryBar
                historyData={[
                  {
                    label: "Главная",
                    path: "/",
                    active: true,
                  },
                  {
                    label: "Помощь",
                    path: "/support",
                    active: false,
                  },
                ]}
              />
              <div className="d-flex align-items-center">
                <h2 className="text-black m-0">Помощь. Создание обращения</h2>
              </div>
              {/* <Box p={4}> */}
              <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-4">
                    <FormControl isInvalid={errors.type ? true : false}>
                      <FormLabel htmlFor="type">Тип обращения</FormLabel>
                      <Select
                        {...register("type", {
                          value: null,
                          required: "Поле обязательно для заполнения",
                        })}
                      >
                        <option value="" disabled>
                          Выберите тип обращения
                        </option>
                        <option value="question1">
                          Вопрос по законодательству
                        </option>
                        <option value="question2">Электронная подпись</option>
                        <option value="question3">
                          Интеграция с zakupki.gov
                        </option>
                      </Select>
                      <FormErrorMessage>
                        {errors.type && errors.type.message}
                      </FormErrorMessage>
                    </FormControl>
                  </div>

                  <div className="col-md-4">
                    <FormControl isInvalid={errors.type ? true : false}>
                      <FormLabel htmlFor="user_role">
                        Текущая роль на площадке
                      </FormLabel>
                      <Select
                        {...register("user_role", {
                          value: null,
                          required: "Поле обязательно для заполнения",
                        })}
                      >
                        <option value="" disabled>
                          Выберите роль
                        </option>
                        <option value="question1">Поставщик</option>
                        <option value="option2">Организатор</option>
                        <option value="option3">Заказчик</option>
                        <option value="option4">Сотрудник организации</option>
                      </Select>
                      <FormErrorMessage>
                        {errors.user_role && errors.user_role.message}
                      </FormErrorMessage>
                    </FormControl>
                  </div>

                  <div className="col-md-4">
                    <FormControl
                      isInvalid={errors.accredit_status ? true : false}
                    >
                      <FormLabel htmlFor="accredit_status">
                        Статус аккредитации
                      </FormLabel>
                      <RadioGroup
                        onChange={(value) => setValue("accredit_status", value)}
                        value={isAccreditedValue}
                        defaultValue="not_accredited"
                      >
                        <Stack direction="row">
                          <Radio value="not_accredited">Не аккредитован</Radio>
                          <Radio value="accredited">Аккредитован</Radio>
                        </Stack>
                      </RadioGroup>
                    </FormControl>
                  </div>

                  <div className="col-md-6">
                    <FormControl
                      className="mt-3"
                      isInvalid={errors.user_fullname ? true : false}
                    >
                      <FormLabel htmlFor="user_fullname">Ф.И.О.</FormLabel>
                      <Input
                        {...register("user_fullname", {
                          value: null,
                          required: "Поле обязательно для заполнения",
                        })}
                      />
                      <FormErrorMessage>
                        {errors.user_fullname && errors.user_fullname.message}
                      </FormErrorMessage>
                    </FormControl>
                  </div>

                  <div className="col-md-6">
                    <FormControl
                      className="mt-3"
                      isInvalid={errors.user_position ? true : false}
                    >
                      <FormLabel htmlFor="user_position">Должность</FormLabel>
                      <Input
                        {...register("user_position", {
                          value: null,
                          required: "Поле обязательно для заполнения",
                        })}
                      />
                      <FormErrorMessage>
                        {errors.user_position && errors.user_position.message}
                      </FormErrorMessage>
                    </FormControl>
                  </div>

                  <div className="col-md-6">
                    <FormControl
                      className="mt-3"
                      isInvalid={errors.user_inn ? true : false}
                    >
                      <FormLabel htmlFor="user_inn">ИНН</FormLabel>
                      <Input
                        {...register("user_inn", {
                          value: null,
                          required: "Поле обязательно для заполнения",
                        })}
                      />
                      <FormErrorMessage>
                        {errors.user_inn && errors.user_inn.message}
                      </FormErrorMessage>
                    </FormControl>
                  </div>

                  <div className="col-md-6">
                    <FormControl
                      className="mt-3"
                      isInvalid={errors.user_email ? true : false}
                    >
                      <FormLabel htmlFor="user_email">
                        Email адрес в системе
                      </FormLabel>
                      <Input
                        {...register("user_email", {
                          value: null,
                          required: "Поле обязательно для заполнения",
                          pattern: {
                            message: "Поле не является email адресом",
                            value:
                              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          },
                        })}
                      />
                      <FormErrorMessage>
                        {errors.user_email && errors.user_email.message}
                      </FormErrorMessage>
                    </FormControl>
                  </div>

                  <div className="col-md-6">
                    <FormControl
                      className="mt-3"
                      isInvalid={errors.user_phone ? true : false}
                    >
                      <FormLabel htmlFor="user_phone">
                        Контактный номер телефона
                      </FormLabel>
                      <Input
                        {...register("user_phone", {
                          value: null,
                          required: "Поле обязательно для заполнения",
                        })}
                      />
                      <FormErrorMessage>
                        {errors.user_phone && errors.user_phone.message}
                      </FormErrorMessage>
                    </FormControl>
                  </div>

                  <div className="col-md-6">
                    <FormControl
                      className="mt-3"
                      isInvalid={errors.user_org_name ? true : false}
                    >
                      <FormLabel htmlFor="user_phone">
                        Полное наименование организации
                      </FormLabel>
                      <Input
                        {...register("user_org_name", {
                          value: null,
                          required: "Поле обязательно для заполнения",
                        })}
                      />
                      <FormErrorMessage>
                        {errors.user_org_name && errors.user_org_name.message}
                      </FormErrorMessage>
                    </FormControl>
                  </div>

                  <FormControl
                    className="mt-3"
                    isInvalid={errors.text ? true : false}
                  >
                    <FormLabel htmlFor="text">Текст обращения</FormLabel>
                    <Textarea
                      id="text"
                      {...register("text", {
                        required: "Поле обязательно для заполнения",
                        value: null,
                      })}
                    />
                    <FormErrorMessage>
                      {errors.text && errors.text.message}
                    </FormErrorMessage>
                  </FormControl>

                  <div className="d-flex justify-content-center">
                    <Button
                      className="mt-4"
                      colorScheme="blue"
                      isLoading={isSubmitting}
                      type="submit"
                      style={{ width: "60%" }}
                    >
                      Отправить
                    </Button>
                  </div>
                </div>
              </form>
              {/* </Box> */}
            </div>
          </div>
        </ChakraProvider>
      </ThemeProvider>
    </MainLayout>
  );
};

export default SupportPage;
