package com.example.springboottest;

import com.example.springboottest.entity.Book;
import com.example.springboottest.repository.BookRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SpringboottestApplicationTests {
    @Autowired
    private BookRepository repository;
    @Test
    void contextLoads() {
    }
    @Test
    void save()
    {
        Book book =new Book();
        book.setName("spring boot");
        book.setAuthor("张三");
        Book book1=repository.save(book);
        System.out.println(book1);
    }
    @Test
    void findById(){
        Book book=repository.findById(1).get();
        System.out.println(book);
    }
}
