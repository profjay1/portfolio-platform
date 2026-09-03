package com.portfolio.portfolio_backend.project;

import java.util.List;

public record Project(
        Long id,
        String title,
        String summary,
        List<String> technologies,
        String status
) {
}
