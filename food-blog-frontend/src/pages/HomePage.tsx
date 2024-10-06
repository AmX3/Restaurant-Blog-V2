import React from "react";
import Button from "../components/Button";
import FoodPost from "../components/FoodPost";
import NavBar from "../components/NavBar";

type Props = {};

const HomePage = (props: Props) => {
    return (
        <div>
            <NavBar />
            <Button label={"Hello"}></Button>
            <FoodPost />
        </div>
    );
};

export default HomePage;
