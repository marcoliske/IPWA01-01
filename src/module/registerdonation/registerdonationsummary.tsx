import { Row, Col } from "antd";
import { UserDonationStore } from "./store/userdonationstore";
import successPic from "./../../assets/haken_ohne_schatten.svg";
import { observer } from "mobx-react-lite";

export const RegisterDonationSummary = observer((): JSX.Element => {
  return (
    <>
      {UserDonationStore.registryData.articles && (
        <div className="summary">
          {" "}
          <Row
            gutter={[16, 24]}
            style={{
              textAlign: "center",
            }}
          >
            <Col
              className="gutter-row"
              span={24}
              style={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img style={{ width: 100 }} src={successPic} alt="success"></img>
            </Col>
            <Col className="gutter-row" span={24}>
              <div style={{ fontWeight: "bold" }}>
                Das hat geklappt, {UserDonationStore.registryData.firstName} !
              </div>
            </Col>
          </Row>
          <Row
            gutter={[16, 8]}
            style={{
              textAlign: "center",
              fontStyle: "italic",
              marginTop: 14,
              marginBottom: 14,
            }}
          >
            <Col className="gutter-row" span={24}>
              <div>
                Zusammenfassung deiner Registrierung vom{" "}
                {UserDonationStore.registryData.date}:
              </div>
            </Col>
            <Col className="gutter-row" span={24}>
              <div>
                Krisengebiet:{" "}
                {UserDonationStore.registryData.shippingArea[0]?.toUpperCase()}{" "}
                -{" "}
                {UserDonationStore.registryData.shippingArea[1]?.toUpperCase()}
              </div>
            </Col>
            <Col className="gutter-row" span={24}>
              <div>Artikel:</div>
            </Col>

            {UserDonationStore.registryData.articles?.map((article, index) => {
              return (
                <>
                  <Col className="gutter-row" span={24} key={index}>
                    {article.amount}x {article.category.toUpperCase()}
                  </Col>
                </>
              );
            })}

            {UserDonationStore.registryData.isDonationDelivered && (
              <Col className="gutter-row" span={24}>
                <div>
                  Du hast angegeben, dass du die Kleider in der Geschäftsstelle
                  abgibst
                </div>
              </Col>
            )}

            {!UserDonationStore.registryData.isDonationDelivered && (
              <>
                <Col className="gutter-row" span={24}>
                  <div>
                    Wir dürfen die Kleider bei dir abholen, in{" "}
                    {UserDonationStore.registryData.street?.toLocaleUpperCase(
                      "DE"
                    )}{" "}
                    {UserDonationStore.registryData.streetNumber}.
                  </div>
                </Col>
                <Col className="gutter-row" span={24}>
                  <div>
                    Abholung ist am nächsten Werktag. Bitte stelle sie an die
                    Haustüre.
                  </div>
                </Col>
              </>
            )}
          </Row>
          <Row
            gutter={[16, 8]}
            style={{
              textAlign: "center",
              marginTop: 14,
              marginBottom: 14,
            }}
          >
            <Col className="gutter-row" span={24}>
              <div>
                Die Zusammenfassung wird dir nochmals als Email geschickt.
              </div>
            </Col>
            <Col className="gutter-row" span={24}>
              <div>
                Danke vielmals für dein Vertrauen! Dein Kleider für alle e.V.
              </div>
            </Col>
          </Row>{" "}
        </div>
      )}
    </>
  );
});
