package com.example.foodblog.service;

import com.example.foodblog.model.FoodPost;
import com.example.foodblog.model.dto.FoodBlogPost;

import java.util.List;
import java.util.Optional;

public interface FoodBlogService {
    List<FoodPost> getAllFoodBlogPosts();

    Optional<FoodPost> getFoodBlogPostById(Integer postId);

    boolean deleteFoodBlogPost(Integer foodBlogPostById);

    FoodPost saveFoodBlogPost(FoodPost foodPost);

//    FoodPost updateFoodBlogPost(Integer foodBlogPostById);


}
