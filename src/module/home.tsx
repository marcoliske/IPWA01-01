import { Col, Row, Space } from "antd";
import { TagsOutlined, SkinOutlined, SendOutlined } from "@ant-design/icons";

export const Home = (): JSX.Element => {
  return (
    <>
      <div className="home">
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Row
            className="home-banner"
            style={{
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
            }}
            gutter={[8, 0]}
          >
            <Col span={24}>
              <h4>Schenk deinen besten Stücken ein zweites Leben</h4>
            </Col>
            <Col span={24}>Wir verteilen deine Kleidung in Krisengebiete</Col>
            <Col span={24} style={{ fontWeight: "bold" }}>
              So gehts:
            </Col>
          </Row>

          <Row
            className="home-content"
            style={{
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
            }}
            gutter={[8, 48]}
          >
            <Col xs={24} md={8}>
              1. Registriere deine Kleiderspende
              <div>
                {" "}
                <SkinOutlined
                  style={{ fontSize: "24px", marginTop: 14 }}
                  rev={undefined}
                ></SkinOutlined>{" "}
              </div>
            </Col>
            <Col xs={24} md={8}>
              2. Gib sie bei uns ab, oder stell sie zur Abholung bereit
              <div>
                {" "}
                <TagsOutlined
                  style={{ fontSize: "24px", marginTop: 14 }}
                  rev={undefined}
                ></TagsOutlined>{" "}
              </div>
            </Col>
            <Col xs={24} md={8}>
              3. Wir kümmern uns um die sichere Lieferung in das Krisengebiet
              <div>
                {" "}
                <SendOutlined
                  style={{ fontSize: "24px", marginTop: 14 }}
                  rev={undefined}
                ></SendOutlined>{" "}
              </div>
            </Col>
          </Row>
        </Space>
      </div>
    </>
  );
};
