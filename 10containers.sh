#!/bin/bash 
    SECONDS = 0
    echo Horario Inicio `date`
    SCRIPT = "while true; do echo Hello ARCELOR Team; sleep 1; done"
    for i in `seq 1 10`
    do
        eval "docker run -d --name arcelor$i ubuntu /bin/sh -c \"$SCRIPT\""
        # eval "docker container rm arcelor$i"
    done
    echo Horario Fim `date`
    echo "Tempo Gasto: $SECONDS seconds"
