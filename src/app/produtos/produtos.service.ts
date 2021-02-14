import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./produto";

@Injectable()
export class ProdutoService {
    protected url = environment.urlServer;

    constructor(private http: HttpClient) {
    }

    obterProdutos(): Observable<Produto[]> {
        return this.http.get<Produto[]>(`${this.url}/produtos`);
    }
}