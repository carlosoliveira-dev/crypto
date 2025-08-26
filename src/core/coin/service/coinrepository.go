package service

import "cryptos/src/core/coin/model"

type Coinrepository interface {
	insert(coin model.Coin) (bool, error)
	search_by_email(email string) (model.Coin, error)
}
