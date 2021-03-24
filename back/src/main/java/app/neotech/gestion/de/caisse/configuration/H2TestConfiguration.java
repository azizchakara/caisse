package app.neotech.gestion.de.caisse.configuration;
import java.util.Properties;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableJpaRepositories(basePackages = {
		"app.neotech.gestion.de.caisse.repositories"
})

@EnableTransactionManagement
public class H2TestConfiguration {
	
	@Bean
	@Profile("test")
	public DataSource dataSource() {
		DriverManagerDataSource source = new DriverManagerDataSource();
		source.setDriverClassName("org.h2.Driver");
		source.setUrl("jdbc:h2:mem:db");
		source.setUsername("sa");
		source.setPassword("");
		
		return source;
	}
	
	@Bean
	public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
		final LocalContainerEntityManagerFactoryBean entityManager = new LocalContainerEntityManagerFactoryBean();
		entityManager.setPackagesToScan("app.neotech.gestion.de.caisse.entities");
		entityManager.setDataSource(createDataSource());
		entityManager.setJpaVendorAdapter(createJpaVendorAdapter());
		entityManager.setJpaProperties(properties());
		return entityManager;
		
	}
	
	 protected DataSource createDataSource() {
	        EmbeddedDatabaseBuilder builder =
	        new EmbeddedDatabaseBuilder();
	        return builder.setType(EmbeddedDatabaseType.H2).build();
	    }
	 
	 private JpaVendorAdapter createJpaVendorAdapter() {
	        return new HibernateJpaVendorAdapter();
	    }

	final Properties properties() {
		final Properties properties = new Properties();
        properties.setProperty("javax.persistence.schema-generation.database.action", "update");
        properties.setProperty("hibernate.dialect", "org.hibernate.dialect.H2Dialect");
        return properties;
	}
	
	  @Bean
	  @Profile("test")
	    PlatformTransactionManager transactionManager(EntityManagerFactory entityManager) {
	    return new JpaTransactionManager(entityManager);
	    }
	  
}

