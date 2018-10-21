package message.service

interface ImageUploadService {
    fun upload(name: String, byteArray: ByteArray)
}