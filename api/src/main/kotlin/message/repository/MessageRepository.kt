package message.repository

import message.domain.Message
import message.querymodel.MessageQueryModel

interface MessageRepository {
    fun create(message: Message): Message
    fun items(): List<MessageQueryModel>
}