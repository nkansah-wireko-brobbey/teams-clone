package com.example.demo.config;

import com.example.demo.auth.CustomOAuth2SuccessHandler;
import com.example.demo.config.filter.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {
    private final CustomOAuth2SuccessHandler successHandler;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final CustomCorsConfiguration customCorsConfiguration;

    @Bean
    public SecurityFilterChain filterChain(
            HttpSecurity httpSecurity
    ) throws  Exception{

        httpSecurity.csrf(csrf->csrf.disable())
                .cors(c->c.configurationSource(customCorsConfiguration))
                .authorizeHttpRequests(
                        auth->auth
                                .requestMatchers(
                                        "/",
                                        "/error",
                                        "/oauth2/**",
                                        "/login/**"
                                ).permitAll()
                                .anyRequest()
                                .authenticated()

                )
                .oauth2Login(oauth2->oauth2.successHandler(successHandler));
        httpSecurity.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        return  httpSecurity.build();
    }
}
