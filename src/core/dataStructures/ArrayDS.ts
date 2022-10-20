export type ArrayOperation = 
'add-start' | 'add-end' | 'add-to' |
'remove-start' | 'remove-end' | 'remove-from' |
'sort-increasing' | 'sort-decreasing' | 
'multipy' | 'filter' | 'intro' | null

export interface ArrayItem {
    id: number, 
    val: number
}