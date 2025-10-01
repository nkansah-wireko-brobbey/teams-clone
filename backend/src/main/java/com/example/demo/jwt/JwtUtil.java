package com.example.demo.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import io.jsonwebtoken.security.SignatureException;
import java.util.Date;

public class JwtUtil {

    private static final Key key= Keys.secretKeyFor(SignatureAlgorithm.HS256);
    private static final long EXPIRATION = 1000*60*60*24;

    public static String generateToken(String email){
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))
                .signWith(key)
                .compact();
    }

    public static String validateToken(String token) throws SignatureException, MalformedJwtException {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}
