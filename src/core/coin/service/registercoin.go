package service

import "cryptos/src/core/coin/model"

type Registercoin struct {
	coinrepo Coinrepository
}

func (r Registercoin) insert(coin model.Coin) (bool, error) {

}

/*

type CreateUserInput struct {
    Name string
    Email string
}

type CreateUserOutput struct {
    ID string
}

type CreateUserUsecase interface {
    Do(input CreateUserInput) (CreateUserOutput, error)
}

*/
