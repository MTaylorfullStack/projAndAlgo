contains(value) {
    var runner = this.head;
    while(runner) {
        if(runner.value == value) {
            return true
        }
        runner = runner.next
    }
    return this
}