import {
    Container,
    FormControl,
    FormLabel,
    Paper,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import Button from "./Button";

type Props = {};

const FoodPost = (props: Props) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [price, setPrice] = useState("");
    const [review, setReview] = useState("");
    const handleClick = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const foodPost = { name, address, price, review };
        console.log(foodPost);
        fetch("http://localhost:8080/foodblog", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(foodPost),
        }).then(() => {
            console.log("New Post Added");
        });
    };

    return (
        <Container>
            <Paper elevation={3}>
                <form>
                    <FormControl>
                        <div>
                            <FormLabel>Restaurant Name</FormLabel>
                            <TextField
                                type="text"
                                variant="outlined"
                                sx={{ mb: 3 }}
                                fullWidth
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required></TextField>
                        </div>
                        <div>
                            <FormLabel>Address</FormLabel>
                            <TextField
                                type="text"
                                variant="outlined"
                                sx={{ mb: 3 }}
                                fullWidth
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required></TextField>
                        </div>{" "}
                        <div>
                            <FormLabel>Price Point</FormLabel>
                            <TextField
                                type="text"
                                variant="outlined"
                                sx={{ mb: 3 }}
                                fullWidth
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required></TextField>
                        </div>{" "}
                        <div>
                            <FormLabel>Review</FormLabel>
                            <TextField
                                type="text"
                                variant="outlined"
                                sx={{ mb: 3 }}
                                fullWidth
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                required></TextField>
                        </div>{" "}
                        {/* <div>
                            <FormLabel>Social</FormLabel>
                            <TextField
                                type="text"
                                variant="outlined"
                                sx={{ mb: 3 }}
                                fullWidth
                                onChange={(e) => setName}
                                required></TextField>
                        </div> */}
                        <Button label={"Submit"} onClick={handleClick}></Button>
                    </FormControl>
                </form>
                {name}
            </Paper>
        </Container>
    );
};

export default FoodPost;
