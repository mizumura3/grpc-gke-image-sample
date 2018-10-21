package message.properties

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.stereotype.Component

@Component
@ConfigurationProperties(prefix = "gcp")
class GcpProperties {
    var secretKey: String = ""
}