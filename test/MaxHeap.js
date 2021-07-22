export class MaxHeap{
    constructor(comparator,options={}){
        if(typeof comparator !== 'function'){
            throw new Error(
                'Passed comparator is invalid, should be a comparison function'
            );
        }
        this._comparator = comparator;
        this._heapIdx = new Map();
        this._heap = [];

        if(Array.isArray(options.initData)){
            this._initFromData(options.initData);
        }
    }

    _initFromData(data){
        this._heap = data.map(({id,value})=>({id,value}));

        data.forEach(({id},i)=>this._heapIdx.set(id,i));

        if(!data.length){return ;}

        for(let i = parentIdx(data.length-1);i>=0;i--){
            this._downHeap(i);
        }
    }

    _downHeap(idx){
        while(leftChildIdx(idx)<this.size()){
            const left = leftChildIdx(idx);
            const right = rightChildIdx(idx);
            let largest = idx;
            
            if(left<this.size()){
                largest = this._maxIndex(largest,left);
            }

            if(right<this.size()){
                largest = this._maxIndex(largest,right);
            }
            if(largest===idx){break;}

            this._swap(largest,idx);
            idx = largest;

        }
    }

    _upHeap(idx){
        while(idx>0){
            const parent = parentIdx(idx);
            if(this._maxIndex(parent,idx)===idx){
                this._swap(parent,idx);
                idx = parent;
            }else{
                break;
            }
        }
    }

    _maxIndex(idxA,idxB){
        const valueA = this._get(idxA);
        const valueB = this._get(idxB);
        return this._comparator(valueA,valueB);
    }

    _get(idx){
        return this._heap[idx].value;
    }

    _swap(idxA,idxB){
        const recA = this._heap[idxA];
        const recB = this._heap[idxB];

        this._heapIdx.set(recA.id,idxB);
        this._heapIdx.set(recB.id,idxA);

        this._heap[idxA] = recB;
        this._heap[idxB] = recA;
    }

    get(id){
        return this.has(id)? this._get(this._heapIdx.get(id)):null;
    }

    set(id,value){
        if(this.has(id)){
            if(this.get(id)===value){
                return;
            }
            const idx = this._heapIdx.get(id);
            this._heap[idx].value=value;

            this._upHeap(idx);
            this._downHeap(idx);
        }else{
            this._heapIdx.set(id,this._heap.length);
            this._heap,push({id,value});
            this._upHeap(this._heap.length-1);
        }
    }

    remove(id){
        if(this.has(id)){
            const last = this._heap.length-1;
            const idx = this._heapIdx.get(id);
            if(idx!==last){
                this._swap(idx,last);
                this._heap.pop();
                this._heapIdx.delete(id);

                this._upHeap(idx);
                this._downHeap(idx);
            }else{
                this._heap.pop();
                this._heapIdx.delete(id);
            }
        }
    }

    has(id) {
        return this._heapIdx.has(id);
    }

    empty() {
        return !this.size();
    }

    clear() {
        this._heap = [];
        this._heapIdx = new Map();
    }

    forEach(iterator) {
        this._heap.forEach(obj => iterator(obj.value, obj.id));
    }

    size(){
        return this._heap.length;
    }

    setDefault(id,def){
        if(this.has(id)){
            return this.get(id);
        }

        this.set(id,def);
        return def;
    }

    maxElementId() {
        return this.size() ? this._heap[0].id : null;
    }

    _selfCheck() {
        for (let i = 1; i < this._heap.length; i++) {
            if (this._maxIndex(parentIdx(i), i) !== parentIdx(i)) {
                throw new Error(
                    `An item with id ${this._heap[i].id}` +
                    ' has a parent younger than it: ' +
                    this._heap[parentIdx(i)].id
                );
            }
        }
    }
}

export class MinHeap extends MaxHeap {
    constructor(comparator, options) {
      super((a, b) => -comparator(a, b), options);
    }
  
    maxElementId() {
      throw new Error('Cannot call maxElementId on MinHeap');
    }
  
    minElementId() {
      return super.maxElementId();
    }
}

const leftChildIdx = i => i * 2 + 1;
const rightChildIdx = i => i * 2 + 2;
const parentIdx = i => (i - 1) >> 1;