package message.repository.impl

import message.domain.Message
import message.repository.MessageRepository
import org.jooq.DSLContext
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional
import generated.jooq.Tables.MESSAGES
import generated.jooq.tables.records.MessagesRecord
import message.querymodel.MessageQueryModel

@Repository
class MessageRepositoryImpl(private val context: DSLContext) : MessageRepository {

    @Transactional
    override fun create(message: Message): Message {
        return context.insertInto(MESSAGES)
                .set(MESSAGES.IMAGE, message.image)
                .returning()
                .fetchOne()
                .map { row(it as MessagesRecord) }
    }

    override fun items(): List<MessageQueryModel> =
        context.selectFrom(MESSAGES)
                .fetch()
                .map { queryModel(it as MessagesRecord) }

    private fun row(r: MessagesRecord) = Message(r.id, r.image)

    private fun queryModel(r: MessagesRecord) = MessageQueryModel(r.id.toLong(), r.image)
}