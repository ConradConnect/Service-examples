# Aim of the service
This service is supposed to show the last workout on an AUGLETICS rowing machine as widget on CCs dashboard.
On top it reminds the user to exercise, by turning a lamp to red if the user wasn't rowing or a certain time.


# Functional description of the service
The user conigures the service on the CC marketplace. He inserts the email address and password of his AUGLETICs account.
The service reaches out to the AUGLETICS api and get access - and refresh token to obtain data.
The service queries for lamps on CC. If he finds lamps he displays them to the user and the user can select one.
The user can select after which time interval he wants to be reminded to exercise (lamp turns on and red at 6 pm)


# Conrad Connect resources 
All Interfaces in VERSION SETTINGS are used. Especially the IotCore to retrieve and actuate the lamp.
On top this service creates a cron job that runs once per day.
It uses the API interface to get AUGLETICS data. This happens by the cron job (once per day), or when the user configures
the service or load the widget dashboard


# External resources 
The AUGLETICS api is used.
    
	
# Limitations / requirements of usage
This service requires you to have an AUGLETICS account.
