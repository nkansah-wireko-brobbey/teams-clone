package com.example.demo.auth;

import com.example.demo.jwt.JwtUtil;
import com.example.demo.model.User;
import com.example.demo.services.UserService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class CustomOAuth2SuccessHandler implements AuthenticationSuccessHandler {

    private final UserService userService;


    @Override
    public void onAuthenticationSuccess(
            HttpServletRequest request,
            HttpServletResponse response,
            Authentication authentication)
            throws IOException, ServletException
    {

        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();

        User user = userService.findOrCreate(
                oAuth2User.getAttribute("email"),
                oAuth2User.getAttribute("name"),
                oAuth2User.getAttribute("picture")
        );

        String token = JwtUtil.generateToken(user.getEmail());

        response.setContentType("application/json");
        response.getWriter().write("{\"token\":\"" + token + "\"}");
    }
}
