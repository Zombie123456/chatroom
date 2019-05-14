import multiprocessing

bind = '0.0.0.0:8002'
loglevel = 'debug'
errorlog = '-'
accesslog = '-'
# # the formula is based on the assumption that for a given core, one worker
# # will be reading or writing from the socket while the other worker is
# # processing a request.
workers = multiprocessing.cpu_count() * 2 + 1
# # Or do you mean there isn't any result value show just in these two records
# # you have provided above?
preload = True
reload = True
worker_class = 'gevent'  # async type worker, so the app can handle a stream of requests in parallel
access_log_format = '{Client-IP: %({X-Real-IP}i)s, Request-time: %(L)s, Request-date: %(t)s, HTTP-Status: "%(r)s", HTTP-Status-Code: %(s)s, Response-length: %(b)s, Http-Referrer: %(f)s, User-Agent: %(a)s}'
