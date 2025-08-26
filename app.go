package main

import (
	"cryptos/src/core/coin/model"
	"fmt"
)

func main() {
	c := model.Coin{Name: "Bitcoin", Contract: "1",
		Price: "255000"}

	fmt.Println(c)
}
