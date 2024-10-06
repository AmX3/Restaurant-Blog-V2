package com.example.foodblog.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "FoodPosts")
@NoArgsConstructor
@AllArgsConstructor
public class FoodPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int foodBlogPostId;

    private String restaurantName;
    private String pricePoint;
    private String review;
    private Location location;
}
