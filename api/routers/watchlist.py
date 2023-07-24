from fastapi import APIRouter, Depends
from models import Watchlist, WatchlistOut, WatchlistIn
from authenticator import authenticator
from queries.watchlist import WatchlistQueries

router = APIRouter()


@router.get('/api/accounts/{account_id}/watchlist', response_model=Watchlist)
def list_watchlist_for_account(
    account_id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: WatchlistQueries = Depends()
):
    return queries.list_all_for_account(account_id=account_data['id'])


@router.post(
        '/api/accounts/{account_id}/watchlist',
        response_model=WatchlistOut
    )
def create_watchlist(
    account_id: str,
    watchlist_in: WatchlistIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: WatchlistQueries = Depends()
):
    return queries.create(
        watchlist_in,
        account_id=account_data['id']
    )


@router.delete('/api/accounts/{account_id}/watchlist/{watchlist_id}')
def delete_watchlist(
    account_id: str,
    watchlist_id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: WatchlistQueries = Depends()
):
    return queries.delete(watchlist_id=watchlist_id, account_id=account_data['id'])
