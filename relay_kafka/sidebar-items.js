window.SIDEBAR_ITEMS = {"enum":[["ClientError","Kafka producer errors."],["ConfigError","Kafka configuration errors."],["KafkaConfig","Describes Kafka config, with all the parameters extracted, which will be used for creating the kafka producer."],["KafkaTopic","Define the topics over which Relay communicates with Sentry."],["TopicAssignment","Configuration for a “logical” topic/datasink that Relay should forward data into."]],"struct":[["KafkaClient","Keeps all the configured kafka producers and responsible for the routing of the messages."],["KafkaClientBuilder","Helper structure responsable for building the actual [`KafkaClient`]."],["KafkaConfigParam","A name value pair of Kafka config parameter."],["KafkaParams","Sharded Kafka config."],["KafkaTopicConfig","Configuration for topic"],["Sharded","Configuration for logical shards -> kafka configuration mapping. The configuration for this should look like: `metrics: shards: 65000 mapping: 0: name: \"ingest-metrics-1\" config: \"metrics_1\" 25000: name: \"ingest-metrics-2\" config: \"metrics_2\" 45000: name: \"ingest-metrics-3\" config: \"metrics_3\"`"],["TopicAssignments","Configuration for topics."]],"trait":[["Message","Describes the type which can be sent using kafka producer provided by this crate."]]};