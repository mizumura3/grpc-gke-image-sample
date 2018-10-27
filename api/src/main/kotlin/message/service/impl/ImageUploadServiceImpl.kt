package message.service.impl

import com.google.auth.oauth2.ServiceAccountCredentials
import com.google.cloud.storage.StorageOptions
import message.properties.GcpProperties
import message.service.ImageUploadService
import org.springframework.stereotype.Service
import java.io.FileInputStream

@Service
class ImageUploadServiceImpl(private val gcpProperties: GcpProperties) : ImageUploadService {
    override fun upload(name: String, byteArray: ByteArray) {
        val hoge = StorageOptions.newBuilder()
                .setCredentials(ServiceAccountCredentials.fromStream(FileInputStream(gcpProperties.secretKey)))
                .build()
                .service
        print(hoge)
    }
}