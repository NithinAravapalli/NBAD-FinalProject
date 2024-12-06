package com.project.N54Application.controller;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/charts")
public class ChartController {

    @GetMapping("/piechart")
    public ResponseEntity<?> getPieChartData() {
        HashMap<String, Object> res = new HashMap<>();
        try {
            Map<String, Object> pieChartData = new HashMap<>();
            pieChartData.put("title", "Generative AI Innovations Distribution");
            pieChartData.put("data", new Object[]{
                    new HashMap<String, Object>() {{
                        put("label", "Multimodal Models");
                        put("value", 20);
                    }},
                    new HashMap<String, Object>() {{
                        put("label", "Generative Agents");
                        put("value", 15);
                    }},
                    new HashMap<String, Object>() {{
                        put("label", "Text-to-Image/Editing");
                        put("value", 15);
                    }},
                    new HashMap<String, Object>() {{
                        put("label", "Music & Audio Generation");
                        put("value", 10);
                    }},
                    new HashMap<String, Object>() {{
                        put("label", "Fine-Tuned Domain Models");
                        put("value", 15);
                    }},
                    new HashMap<String, Object>() {{
                        put("label", "Few-Shot Learning");
                        put("value", 10);
                    }},
                    new HashMap<String, Object>() {{
                        put("label", "Video Synthesis");
                        put("value", 10);
                    }},
                    new HashMap<String, Object>() {{
                        put("label", "Ethics and Explainability");
                        put("value", 5);
                    }}
            });

            res.put("success", true);
            res.put("pie", pieChartData);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        } catch (Exception e) {
            res.put("success", false);
            res.put("err", "An Error occurred" + e.getMessage());
            return ResponseEntity.internalServerError().body(res);
        }
    }

    @GetMapping("/barchart")
    public ResponseEntity<Map<String, Object>> getBarChartData() {
        HashMap<String, Object> res = new HashMap<>();
        try {
            // Bar chart data in JSON format
            Map<String, Object> barChartData = new HashMap<>();
            barChartData.put("title", "Innovations per Category");

            // Bar chart data points
            barChartData.put("data", new Object[]{
                    new HashMap<String, Object>() {{
                        put("category", "Multimodal Models");
                        put("value", 5);
                    }},
                    new HashMap<String, Object>() {{
                        put("category", "Generative Agents");
                        put("value", 3);
                    }},
                    new HashMap<String, Object>() {{
                        put("category", "Text-to-Image/Editing");
                        put("value", 4);
                    }},
                    new HashMap<String, Object>() {{
                        put("category", "Music & Audio Generation");
                        put("value", 3);
                    }},
                    new HashMap<String, Object>() {{
                        put("category", "Fine-Tuned Domain Models");
                        put("value", 4);
                    }},
                    new HashMap<String, Object>() {{
                        put("category", "Few-Shot Learning");
                        put("value", 3);
                    }},
                    new HashMap<String, Object>() {{
                        put("category", "Video Synthesis");
                        put("value", 2);
                    }},
                    new HashMap<String, Object>() {{
                        put("category", "Ethics and Explainability");
                        put("value", 1);
                    }}
            });
            res.put("success", true);
            res.put("bar", barChartData);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        } catch (Exception e) {
            res.put("success", false);
            res.put("err", "Failed to fetch the bar graph data" + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }
}
