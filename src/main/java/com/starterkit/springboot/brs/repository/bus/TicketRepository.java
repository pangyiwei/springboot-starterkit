package com.starterkit.springboot.brs.repository.bus;

import java.util.List;

import com.starterkit.springboot.brs.model.bus.Ticket;
import com.starterkit.springboot.brs.model.user.User;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by Arpit Khandelwal.
 */
public interface TicketRepository extends MongoRepository<Ticket, Long> {
    List<Ticket> findByPassenger(User passenger);
}
