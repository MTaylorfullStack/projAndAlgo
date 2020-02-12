length() {
    var runner = this.head;
    var nodes = 0;
    while(runner) {
        nodes += 1;
        runner=runner.next
    }
    return this
}