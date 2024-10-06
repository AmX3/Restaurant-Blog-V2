package com.example.foodblog.controller;

import com.example.foodblog.model.FoodPost;
import com.example.foodblog.service.FoodBlogService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@Validated
@RequestMapping(value = "/foodblog", produces = MediaType.APPLICATION_JSON_VALUE)
public class FoodBlogController {
    private static final Logger LOGGER = LoggerFactory.getLogger(FoodBlogController.class);

    private final FoodBlogService foodBlogService;

    @Autowired
    public FoodBlogController(FoodBlogService foodBlogService) {
        this.foodBlogService = foodBlogService;
    }

    // Get all posts
    @GetMapping
    public List<FoodPost> getAllFoodBlogPosts() {
        return foodBlogService.getAllFoodBlogPosts();
    }

    // Get a single post by id
    @GetMapping("/{id}")
    public FoodPost getFoodBlogPost(@PathVariable Integer id) {
        return foodBlogService.getFoodBlogPostById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build()).getBody();
    }

    // Save a new post
    @PostMapping
    public FoodPost createFoodPost(@RequestBody FoodPost post) {
        return foodBlogService.saveFoodBlogPost(post);
    }

    // Update a new post
//    @PutMapping("/{id}")
//    public FoodPost updatePost(@PathVariable Integer id, @RequestBody FoodPost updatedPost) {
//        return foodBlogService.updateFoodBlogPost(id);
//    }

    // Delete a post
    @DeleteMapping("/{id}")
    public boolean deleteFoodBlogPost(@PathVariable Integer id) {
        return foodBlogService.deleteFoodBlogPost(id);
    }









}
