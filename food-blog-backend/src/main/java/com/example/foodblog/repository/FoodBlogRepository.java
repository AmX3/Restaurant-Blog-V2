package com.example.foodblog.repository;

import com.example.foodblog.model.FoodPost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodBlogRepository extends JpaRepository<FoodPost, Integer> {


}
