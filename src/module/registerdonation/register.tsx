import React, { useEffect, useRef } from "react";
import { Carousel, Steps } from "antd";
import { observer } from "mobx-react-lite";
import { CarouselRef } from "antd/lib/carousel";
import { UserDonationStore } from "./store/userdonationstore";
import { RegisterDonationInfo } from "./registerdonationinfo";
import { RegisterUserInfo } from "./registeruserinfo";
import { RegisterDonationSummary } from "./registerdonationsummary";

export const Register = observer((): JSX.Element => {
  const { Step } = Steps;

  const carouselRef = useRef<CarouselRef>(null);

  useEffect(() => {
    carouselRef.current?.goTo(UserDonationStore.registryProgress.step - 1);
  }, [UserDonationStore.registryProgress.step]);

  return (
    <>
      <div className="register">
        <Steps current={UserDonationStore.registryProgress.step - 1}>
          <Step title="Deine Anmeldung"></Step>
          <Step title="Deine Kleiderspende"></Step>
          <Step title="Zusammenfassung"></Step>
        </Steps>
        <Carousel
          swipe={false}
          style={{ marginTop: 14 }}
          ref={carouselRef}
          dots={false}
        >
          <RegisterUserInfo></RegisterUserInfo>
          <RegisterDonationInfo></RegisterDonationInfo>
          <RegisterDonationSummary></RegisterDonationSummary>
        </Carousel>
      </div>
    </>
  );
});
