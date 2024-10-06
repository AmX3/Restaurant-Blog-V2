package com.example.foodblog.service;

import com.example.foodblog.model.FoodPost;
import com.example.foodblog.repository.FoodBlogRepository;

import java.util.List;
import java.util.Optional;

public class FoodBlogServiceImpl implements FoodBlogService{

    private final FoodBlogRepository foodBlogRepository;

    public FoodBlogServiceImpl(FoodBlogRepository foodBlogRepository) {
        this.foodBlogRepository = foodBlogRepository;
    }

    @Override
    public List<FoodPost> getAllFoodBlogPosts() {
        return foodBlogRepository.findAll();
    }

    @Override
    public Optional<FoodPost> getFoodBlogPostById(Integer postId) {
        return foodBlogRepository.findById(postId);
    }

    @Override
    public boolean deleteFoodBlogPost(Integer foodBlogPostById) {
        return false;
//        return foodBlogRepository.deleteById(foodBlogPostById);
    }

    @Override
    public FoodPost saveFoodBlogPost(FoodPost foodPost) {
        return foodBlogRepository.save(foodPost);
    }

//    @Override
//    public FoodPost updateFoodBlogPost(Integer foodBlogPostById) {
//        return foodBlogRepository.save(foodBlogPostById);
//    }
}
