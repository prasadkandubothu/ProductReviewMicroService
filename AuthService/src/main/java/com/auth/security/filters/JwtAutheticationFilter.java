package com.auth.security.filters;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth.util.SecurityConstants;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtAutheticationFilter extends UsernamePasswordAuthenticationFilter{
	
	@Autowired
	private AuthenticationManager authenticationManager;

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		System.out.println("attempt authentication called");
		String username=request.getParameter("username");
		String password=request.getParameter("password");
		
		UsernamePasswordAuthenticationToken token=new UsernamePasswordAuthenticationToken(username, password);
		return authenticationManager.authenticate(token);
	}

	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		User user=(User)authResult.getPrincipal();
		
		List<String> roles=user.getAuthorities().stream()
		.map(GrantedAuthority::getAuthority)
		.collect(Collectors.toList());
		
		String token=Jwts.builder()
		.setSubject(user.getUsername())
		.setExpiration(new Date(System.currentTimeMillis()+864000000))
		.signWith(SignatureAlgorithm.HS512, "secret")
		.setIssuer(SecurityConstants.JWT_TOKEN_ISSUER)
		.setAudience(SecurityConstants.JWT_TOKEN_AUDIENCE)
		.setHeaderParam("typ",SecurityConstants.TOKEN_TYPE)
		.claim("rol", roles)
		.compact();
		//super.successfulAuthentication(request, response, chain, authResult);
		response.addHeader(SecurityConstants.JWT_TOKEN_HEADER, SecurityConstants.JWT_TOKEN_PREFIX+token);
	}

	@Override
	public void setFilterProcessesUrl(String filterProcessesUrl) {
		// TODO Auto-generated method stub
		System.out.println("set processing url called");
		super.setFilterProcessesUrl(SecurityConstants.AUTH_LOGIN_URL);
	}
	
	
	
}
