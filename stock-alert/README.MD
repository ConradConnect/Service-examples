# Aim of the service
This service allows users to preview actual data for certain stock on widget. 
It also setups Cron which triggers service every 15 minutes and if the current price
is below set threshold it turns on lamp and sets red color


# Functional description of the service
1. There are two ways to configure the Stock Alert service:
when the user doesn't possess Wiz lamp, she or he must
generate and fill in API key and select stock index.

when the user possess Wiz lamp she or he must 
provide two additional fields: threshold under which 
the alarm will be triggered and Wiz lamp (you can have multiple Wiz lamps)
2. When service is configured the user can observe selected stock 
data on the dashboard's widget and be notified about particular share
drop by Wiz lamp. After 15 minutes when the share price will be higher 
than set up threshold Wiz lamp turn off automatically.

3. Anytime user can configure service again and choose other stock index
from 20 available (service uses top 20 indexes from NASDAQ)


# Conrad Connect resources 
It uses Cron interface to setup service triggering every 15 min
Data are stored in KeyValueStore
It also use IoTCore to get user devices and actuate selected lamp


# External resources 
It makes call to external API https://www.alphavantage.co/documentation/ to get 
latest stock data
    
	
# Limitations / requirements of usage
You need to have Wiz lamp
You need to generate unique API key at https://www.alphavantage.co/support/#api-key
You need to have installed npm packages: Joi
