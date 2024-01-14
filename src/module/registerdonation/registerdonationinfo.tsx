import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Switch,
  Select,
  Cascader,
  Space,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { IUserRegistryData, regExAlphabetical } from "../../interface";
import { UserDonationStore } from "./store/userdonationstore";
import { articleCategory } from "../../interface";
import { observer } from "mobx-react-lite";

const { Option } = Select;

export const RegisterDonationInfo = observer((): JSX.Element => {
  const [form] = Form.useForm();

  const residences = [
    {
      value: "israel",
      label: "Israel",
      children: [
        {
          value: "jerusalem",
          label: "Jerusalem",
        },
      ],
    },
    {
      value: "ukraine",
      label: "Ukraine",
      children: [
        {
          value: "charkiw",
          label: "Charkiw",
        },
        {
          value: "kiew",
          label: "Kiew",
        },
      ],
    },
    {
      value: "southAmerica",
      label: "Südamerika",
      children: [
        {
          value: "bolivia",
          label: "Bolivien",
        },
        {
          value: "columbia",
          label: "Kolumbien",
        },
        {
          value: "venezuela",
          label: "Venezuela",
        },
      ],
    },
  ];

  const handleBackClick = (): void => {
    UserDonationStore.registryProgress.step = 1;
  };

  const onFinish = (values: IUserRegistryData): void => {
    UserDonationStore.registryProgress.step = 3;
    UserDonationStore.registryData = {
      ...UserDonationStore.registryData,
      ...values,
      date: new Date().toLocaleString("DE"),
    };
    console.log(UserDonationStore.registryData);
  };

  const handleSwitchChange = (checked: boolean) => {
    UserDonationStore.registryData.isDonationDelivered = checked;
  };

  return (
    <>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          name="shippingArea"
          label="Krisengebiet"
          rules={[
            {
              type: "array",
              required: true,
              message: "Bitte wähle ein Krisengebiet aus",
            },
          ]}
        >
          <Cascader options={residences} />
        </Form.Item>

        <Form.Item
          label="* Artikel"
          wrapperCol={{ span: 8 }}
          style={{ marginBottom: 0, marginTop: 14 }}
        >
          <Form.List
            name="articles"
            rules={[
              {
                validator: async (_, articles) => {
                  if (!articles || articles.length < 1) {
                    return Promise.reject(
                      new Error("Bitte mindestens einen Artikel hinzufügen")
                    );
                  }
                },
              },
            ]}
          >
            {(articles, { add, remove }, { errors }) => (
              <>
                {articles.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name, "category"]}
                      rules={[
                        {
                          required: true,
                          message: "Bitte gib einen Artikel an",
                        },
                      ]}
                    >
                      <Select placeholder="Artikel">
                        <Option value={articleCategory.tshirt}>Tshirt</Option>
                        <Option value={articleCategory.pant}>Hose</Option>
                        <Option value={articleCategory.shoe}>Schuhe</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "amount"]}
                      rules={[
                        {
                          required: true,
                          message: "Bitte gib eine Anzahl an",
                        },
                      ]}
                    >
                      <InputNumber
                        min={1}
                        max={1000}
                        placeholder="Anzahl"
                      ></InputNumber>
                    </Form.Item>
                    <MinusCircleOutlined
                      onClick={() => remove(name)}
                      rev={undefined}
                    />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="default"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined rev={undefined} />}
                  >
                    Artikel
                  </Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>

        <Form.Item label="Übergabe im Verein" style={{ marginBottom: 14 }}>
          <Switch onChange={handleSwitchChange}></Switch>
        </Form.Item>
        {UserDonationStore.registryData.isDonationDelivered && (
          <>
            {" "}
            <Row>
              <Col span={8}></Col>
              <Col xs={24} md={8}>
                <p style={{ fontWeight: "bold" }}>Kleider abgeben bei:</p>
              </Col>
            </Row>
            <Row style={{ marginBottom: 14 }}>
              <Col span={8}></Col>
              <Col xs={24} md={8}>
                <p>Kleider für alle e.V., Dorfstraße 8, 96450 Coburg</p>
              </Col>
            </Row>
          </>
        )}
        {!UserDonationStore.registryData.isDonationDelivered && (
          <Form.Item
            label="* Abholadresse"
            wrapperCol={{ span: 16 }}
            style={{ marginBottom: 0, marginTop: 14 }}
          >
            <Input.Group>
              <Row>
                <Form.Item
                  name="street"
                  rules={[
                    {
                      required:
                        !UserDonationStore.registryData.isDonationDelivered,
                      message: "Bitte gib deine Straße an",
                    },
                    regExAlphabetical,
                  ]}
                  style={{ marginRight: 14 }}
                >
                  <Input placeholder="Straße"></Input>
                </Form.Item>
                <Form.Item
                  name="streetNumber"
                  rules={[
                    {
                      required:
                        !UserDonationStore.registryData.isDonationDelivered,
                      message: "Nr. fehlt",
                    },
                  ]}
                >
                  <InputNumber
                    controls={false}
                    min={1}
                    max={1000}
                    placeholder="Nr."
                  ></InputNumber>
                </Form.Item>
              </Row>
              <Row>
                <Form.Item
                  name="city"
                  rules={[
                    {
                      required:
                        !UserDonationStore.registryData.isDonationDelivered,
                      message: "Bitte gib deinen Ort an",
                    },
                    regExAlphabetical,
                  ]}
                  style={{ marginRight: 14 }}
                >
                  <Input placeholder="Ort"></Input>
                </Form.Item>
                <Form.Item
                  name="postalCode"
                  rules={[
                    {
                      required:
                        !UserDonationStore.registryData.isDonationDelivered,
                      message: "Bitte gib deine PLZ an",
                    },
                    () => ({
                      validator(_, postalCode: number) {
                        if (postalCode) {
                          const stringPostalCode = postalCode.toString();
                          if (
                            stringPostalCode.length === 5 &&
                            stringPostalCode.slice(0, 2) === "96"
                          ) {
                            return Promise.resolve();
                          } else if (stringPostalCode.length !== 5) {
                            return Promise.reject(
                              new Error("Keine gültige PLZ!")
                            );
                          } else if (stringPostalCode.slice(0, 2) !== "96") {
                            return Promise.reject(
                              new Error(
                                "Abholung geht nur im Raum Coburg (PLZ 96)"
                              )
                            );
                          }
                        } else {
                          return Promise.reject();
                        }
                      },
                    }),
                  ]}
                >
                  <InputNumber
                    min={0}
                    controls={false}
                    placeholder="PLZ"
                  ></InputNumber>
                </Form.Item>
              </Row>
            </Input.Group>
          </Form.Item>
        )}

        <Row>
          <Col span={8}></Col>
          <Col xs={24} md={4}>
            <Form.Item style={{ marginRight: 14 }}>
              <Button onClick={() => handleBackClick()}>Zurück</Button>
            </Form.Item>
          </Col>
          <Col xs={24} md={4}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Abschließen
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
});
