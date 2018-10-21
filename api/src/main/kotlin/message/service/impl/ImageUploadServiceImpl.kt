package message.service.impl

import message.properties.GcpProperties
import message.service.ImageUploadService
import org.springframework.stereotype.Service

@Service
class ImageUploadServiceImpl(private val gcpProperties: GcpProperties) : ImageUploadService {
    override fun upload(name: String, byteArray: ByteArray) {
        println(gcpProperties.secretKey)
    }
}