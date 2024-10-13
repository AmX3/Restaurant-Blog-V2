import {
  Container,
  FormControl,
  FormLabel,
  Paper,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "./Button";

type Post = {
  postId: BigInteger;
  name: String;
  address: String;
  review: String;
  imageUrl: String;
};

const FoodPost = (props: Post) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [review, setReview] = useState("");
  const [posts, setPosts] = useState([]);

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const foodPost = { name, address, price, review };
    console.log(foodPost);
    fetch("http://localhost:8080/foodblog/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(foodPost),
    }).then(() => {
      console.log("New Post Added");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/foodblog/getPosts")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);

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
                required
              ></TextField>
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
                required
              ></TextField>
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
                required
              ></TextField>
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
                required
              ></TextField>
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

      <Paper elevation={3}>
        {posts.map((post: Post) => (
          <Paper elevation={6} key={post.postId}>
            Name:{post.name} <br />
            {/* Address: {post.address} </br> */}
          </Paper>
        ))}
      </Paper>
    </Container>
  );
};

export default FoodPost;
