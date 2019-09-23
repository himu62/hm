package main

import (
	"log"
	"net/http"
)

func main() {
	s := http.NewServeMux()
	s.Handle("/", http.FileServer(http.Dir("public_html")))

	if err := http.ListenAndServe(":8888", s); err != nil {
		log.Fatalf("%s\n", err)
	}
}
