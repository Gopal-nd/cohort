#include <iostream>
#include <chrono>

int main() {
    auto start = std::chrono::high_resolution_clock::now();

    long long val = 0;
    for (long long i = 0; i < 100'000'000'000; i++) {
        val += i;
    }

    std::cout << val << std::endl;

    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> elapsed = end - start;

    std::cout << "Time elapsed: " << elapsed.count() << " seconds" << std::endl;
    return 0;
}
