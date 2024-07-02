import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Plus, X } from 'lucide-react'

export function ProductCreation() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Cadastro de produto</DialogTitle>
        <DialogDescription>Insira os dados abaixo</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Fruta
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Nome Produto
              </TableCell>
              <TableCell className="flex justify-end">Maça verde</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Quantidade
              </TableCell>
              <TableCell className="flex justify-end">20</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Preço unitário
              </TableCell>
              <TableCell className="flex justify-end">R$ 2,60</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Telefone fornecedor
              </TableCell>
              <TableCell className="flex justify-end">
                (47) 99999-9999
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                E-mail fornecedor
              </TableCell>
              <TableCell className="flex justify-end">
                ceasa@ceasa.com.br
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Registrado há
              </TableCell>
              <TableCell className="flex justify-end">há 3 minutos</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="flex justify-end space-x-4">
          <Button variant="outline" size="lg">
            <Plus className="mr-2 h-4 w-4" />
            Criar
          </Button>
          <Button variant="outline" size="lg">
            <X className="mr-2 h-4 w-4" />
            Cancelar
          </Button>
        </div>
      </div>
    </DialogContent>
  )
}
